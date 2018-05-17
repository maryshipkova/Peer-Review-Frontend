import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {SystemModule} from './system/system.module';
import {AuthModule} from './auth/auth.module';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './common/services/user.service';
import {AuthService} from './common/services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SystemModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [UserService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
