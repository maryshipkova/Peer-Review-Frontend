import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule} from '@angular/forms';
import {AuthComponent} from './auth.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  declarations: [
    AuthComponent,
    SignUpComponent,
    LoginComponent
  ]
})
export class AuthModule { }
