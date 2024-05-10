import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './modules/main/account-details/account-details.component';

const routes: Routes = [
  {path:'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path:'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)},
  //{ path: 'account-details', component: AccountDetailsComponent },
  {path:'', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
