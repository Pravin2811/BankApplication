import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { FormsModule } from '@angular/forms';
import { NomineeComponent } from './nominee/nominee.component';
import { NomineeUpdateComponent } from './nominee-update/nominee-update.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    AccountDetailsComponent,
    ProfileComponent,
    ProfileUpdateComponent,
    NomineeComponent,
    NomineeUpdateComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ]
})
export class MainModule { }
