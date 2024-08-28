import { Component } from '@angular/core'
import { ChildrenOutletContexts, RouterLink, RouterModule, RouterOutlet } from '@angular/router'
import { menusList } from './common/menu-data'
import { slideInAnimation } from './animation/slideInAnimation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations:[slideInAnimation]
})
export class AppComponent {
  menusList = menusList

  constructor(private contexts: ChildrenOutletContexts) {}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
