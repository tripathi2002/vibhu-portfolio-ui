import { Component, input } from '@angular/core';
import { SkillItem } from '../../core/data/site-content';

@Component({
  selector: 'app-skill-bars',
  templateUrl: './skill-bars.html',
  styleUrl: './skill-bars.scss',
})
export class SkillBars {
  readonly skills = input.required<SkillItem[]>();
  readonly title = input<string>('Skills');
  readonly intro = input<string | null>(null);
}
