import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { NomineeComponent } from './nominee/nominee.component';
import { NomineeUpdateComponent } from './nominee-update/nominee-update.component';

const routes: Routes = [
  // {path:'',component:HeaderComponent},
  // {path:'', component:MenuComponent}
  {
    path: '',
    component: HeaderComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      //{ path: '', component: MenuComponent },
      { path: 'account-details', component: AccountDetailsComponent },
      { path: 'profile', component: ProfileComponent},
      {path: 'update-profile/:data', component: ProfileUpdateComponent},
      { path: 'nominee-maintenance', component: NomineeComponent},
      { path: 'update-nominee/:data', component: NomineeUpdateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
