import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [style({transform: 'translateX(-100%)'}), animate(100)]),
      transition('* => void', [animate(100, style({transform: 'translateX(100%)'}))]),
    ]),
  ],
})
export class HomeComponent {
  readonly highlightState = signal<'normal' | 'highlight'>('normal');
}
