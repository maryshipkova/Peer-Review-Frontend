import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemComponent} from './system.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CoursesPageComponent} from './courses-page/courses-page.component';
import {InvitationsPageComponent} from './invitations-page/invitations-page.component';
import {CourseComponent} from './course/course.component';
import {SolutionPageComponent} from './course/solution-page/solution-page.component';
import {CoursePageComponent} from './course/course-page/course-page.component';
import {CourseInviteComponent} from './course/course-page/course-invite/course-invite.component';
import {CourseCreationPageComponent} from './course-creation-page/course-creation-page.component';

const routes: Routes = [
  {
    path: '', component: SystemComponent,
    children: [
      {path: 'home', component: HomePageComponent},
      {path: 'courses', component: CoursesPageComponent},
      {path: 'invitations', component: InvitationsPageComponent},
      {path: 'courseid', component: CoursePageComponent}, // temp
      {path: 'solution', component: SolutionPageComponent},
      {path: 'create-course', component: CourseCreationPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule { }
