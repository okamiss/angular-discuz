import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../../animations/slideInAnimation';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './live.component.html',
  styleUrl: './live.component.scss',
  animations: [slideInAnimation]
})
export class LiveComponent {
  constructor(private contexts: ChildrenOutletContexts) {}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']
  }
}
