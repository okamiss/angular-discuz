import { Component } from '@angular/core'
import { ChildrenOutletContexts, RouterLink, RouterModule, RouterOutlet } from '@angular/router'
import { menusList } from './common/menu-data'
import { slideInAnimation } from './animation/slideInAnimation'
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    RouterLink,
    MatSlideToggleModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation]
})
export class AppComponent {
  menusList = menusList

  constructor(private contexts: ChildrenOutletContexts) {}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']
  }

  swChange(e: MatSlideToggleChange) {
    console.log(e)
  }

  setThem(e:number){
    console.log(e);
    
  }
}
