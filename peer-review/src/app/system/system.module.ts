import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvitationsPageComponent} from './invitations-page/invitations-page.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {SystemComponent} from './system.component';
import {HomePageComponent} from './home-page/home-page.component';
import {SystemRoutingModule} from './system-routing.module';
import {RouterModule} from '@angular/router';
import {CourseModule} from './course/course.module';
import {CoursesPageComponent} from './courses-page/courses-page.component';
import {TaskService} from './shared/services/task.service';
import {CourseService} from './shared/services/course.service';
import {ReviewService} from './shared/services/review.service';
import {SolutionService} from './shared/services/solution.service';
import { CourseCreationPageComponent } from './course-creation-page/course-creation-page.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SystemRoutingModule,
    CourseModule,
    FormsModule


  ],
  declarations: [
    CoursesPageComponent,
    InvitationsPageComponent,
    NavbarComponent,
    HomePageComponent,
    SystemComponent,
    CourseCreationPageComponent
  ],
  providers: [TaskService, CourseService, ReviewService, SolutionService]
})
export class SystemModule {
}
