import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {
    path: 'auth', component: AuthComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignUpComponent},
      {path: 'logout', component: LogoutComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
