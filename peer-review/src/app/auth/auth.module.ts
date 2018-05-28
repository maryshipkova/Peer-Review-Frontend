import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthComponent} from './auth.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';
import {UserService} from '../common/services/user.service';
import {AuthService} from '../common/services/auth.service';
import {LogoutComponent} from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthComponent,
    SignUpComponent,
    LoginComponent,
    LogoutComponent
  ],
  providers: [UserService, AuthService]
})
export class AuthModule {
}
