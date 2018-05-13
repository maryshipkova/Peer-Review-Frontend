import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursesPageComponent} from './courses-page/courses-page.component';
import {InvitationsPageComponent} from './invitations-page/invitations-page.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {SystemComponent} from './system.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SystemRoutingModule} from './system-routing.module';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    SystemRoutingModule


  ],
  declarations: [
    CoursesPageComponent,
    InvitationsPageComponent,
    NavbarComponent,
    HomePageComponent,
    SystemComponent
  ]
})
export class SystemModule {
}
