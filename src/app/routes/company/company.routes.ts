import { Routes } from '@angular/router'
import { AssetComponent } from './asset/asset.component'
import { StaffComponent } from './staff/staff.component'

export const routes: Routes = [
  { path: '', redirectTo: 'asset', pathMatch: 'full' },
  { path: 'asset', component: AssetComponent },
  { path: 'staff', component: StaffComponent }
]
