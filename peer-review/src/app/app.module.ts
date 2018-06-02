import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {SystemModule} from './system/system.module';
import {AuthModule} from './auth/auth.module';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './common/components/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SystemModule,
    AuthModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
