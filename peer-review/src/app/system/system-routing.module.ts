import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemComponent} from './system.component';
import {HomePageComponent} from './home-page/home-page.component';
import {CoursesPageComponent} from './courses-page/courses-page.component';
import {InvitationsPageComponent} from './invitations-page/invitations-page.component';

const routes: Routes = [
  {
    path: '', component: SystemComponent,
    children: [
      {path: 'home', component: HomePageComponent},
      {path: 'courses', component: CoursesPageComponent},
      {path: 'invitations', component: InvitationsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule { }
