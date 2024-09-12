import { Routes } from '@angular/router'
import { AssetComponent } from './asset/asset.component'

export const routes: Routes = [
  { path: '', redirectTo: 'asset', pathMatch: 'full' },
  { path: 'asset', component: AssetComponent }
]
