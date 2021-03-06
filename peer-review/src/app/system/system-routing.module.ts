import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SystemComponent} from './system.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CoursesPageComponent} from './courses-page/courses-page.component';
import {InvitationsPageComponent} from './invitations-page/invitations-page.component';
import {CourseComponent} from './course/course.component';
import {SolutionPageComponent} from './course/solution-page/solution-page.component';

import {CourseCreationPageComponent} from './course-creation-page/course-creation-page.component';
import {AuthGuardService} from '../common/services/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: SystemComponent,
    children: [
      {path: 'home', component: HomePageComponent},
      {path: 'courses', component: CoursesPageComponent, canActivate: [AuthGuardService]},
      {path: 'invitations', component: InvitationsPageComponent, canActivate: [AuthGuardService]},
      {path: 'create-course', component: CourseCreationPageComponent, canActivate: [AuthGuardService]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {
}
