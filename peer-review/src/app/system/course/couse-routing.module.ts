import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CourseComponent} from './course.component';
import {CourseInfoComponent} from './course-page/course-info/course-info.component';
import {TaskListComponent} from './course-page/task-list/task-list.component';
import {CourseStudentsComponent} from './course-page/course-students/course-students.component';
import {SystemComponent} from '../system.component';


const routes: Routes = [
  {
    path: '', component: SystemComponent,
    children: [
      {
        path: 'course', component: CourseComponent,
        children: [
          {path: 'info', component: CourseInfoComponent},
          {path: 'tasks', component: TaskListComponent},
          {path: 'students', component: CourseStudentsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CourseRoutingModule {
}
