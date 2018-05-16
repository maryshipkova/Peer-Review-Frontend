import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvitationsPageComponent} from './invitations-page/invitations-page.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {SystemComponent} from './system.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SystemRoutingModule} from './system-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CourseModule} from './course/course.module';
import {CoursesPageComponent} from './courses-page/courses-page.component';
import { SComponent } from './shared/services/s/s.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SystemRoutingModule,
    CourseModule


  ],
  declarations: [
    CoursesPageComponent,
    InvitationsPageComponent,
    NavbarComponent,
    HomePageComponent,
    SystemComponent,
    SComponent
  ]
})
export class SystemModule {
}
