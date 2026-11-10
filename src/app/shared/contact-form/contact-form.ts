import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTACT_PAGE } from '../../core/data/site-content';
import { ContactApiService } from '../../core/services/contact-api.service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  private readonly fb = inject(FormBuilder);
  private readonly contactApi = inject(ContactApiService);

  protected readonly copy = CONTACT_PAGE.form;
  protected readonly submitted = signal(false);
  protected readonly submitting = signal(false);
  protected readonly submitError = signal<string | null>(null);
  protected readonly successMessage: WritableSignal<string> = signal(
    String(CONTACT_PAGE.form.success),
  );

  protected readonly form = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    mobile: [''],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  protected submit(): void {
    if (this.form.invalid || this.submitting()) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting.set(true);
    this.submitError.set(null);

    this.contactApi.submit(this.form.getRawValue()).subscribe({
      next: (res) => {
        this.submitting.set(false);
        if (res.ok) {
          this.successMessage.set(res.message ?? this.copy.success);
          this.submitted.set(true);
          this.form.reset();
          return;
        }

        this.submitError.set(res.message ?? this.copy.error);
        if (res.errors) {
          for (const [key, message] of Object.entries(res.errors)) {
            const control = this.form.get(key);
            if (control) {
              control.setErrors({ server: message });
            }
          }
        }
      },
      error: (err: HttpErrorResponse) => {
        this.submitting.set(false);
        const body = err.error as { message?: string; errors?: Record<string, string> } | null;
        this.submitError.set(body?.message ?? this.copy.error);
        if (body?.errors) {
          for (const [key, message] of Object.entries(body.errors)) {
            const control = this.form.get(key);
            if (control) {
              control.setErrors({ server: message });
            }
          }
        }
      },
    });
  }
}
