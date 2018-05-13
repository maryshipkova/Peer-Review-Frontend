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
import { CourseComponent } from './course/course.component';
import { TaskPageComponent } from './course/task-page/task-page.component';
import { SolutionPageComponent } from './course/solution-page/solution-page.component';
import { SidebarComponent } from './course/sidebar/sidebar.component';
import { TaskListComponent } from './course/course-page/task-list/task-list.component';
import { CoursePageComponent } from './course/course-page/course-page.component';
import { CourseInfoComponent } from './course/course-page/course-info/course-info.component';
import { CourseStudentsComponent } from './course/course-page/course-students/course-students.component';

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
    SystemComponent,
    CourseComponent,
    TaskPageComponent,
    SolutionPageComponent,
    SidebarComponent,
    TaskListComponent,
    CoursePageComponent,
    CourseInfoComponent,
    CourseStudentsComponent
  ]
})
export class SystemModule {
}
