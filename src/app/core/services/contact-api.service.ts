import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ContactPayload {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  ok: boolean;
  message?: string;
  errors?: Record<string, string>;
}

@Injectable({ providedIn: 'root' })
export class ContactApiService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = `${environment.apiBaseUrl.replace(/\/$/, '')}/contact.php`;

  submit(payload: ContactPayload): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.endpoint, payload);
  }
}
