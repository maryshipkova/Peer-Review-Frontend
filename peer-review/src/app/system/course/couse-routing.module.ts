import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CourseComponent} from './course.component';
import {CourseInfoComponent} from './course-page/course-info/course-info.component';
import {TaskListComponent} from './course-page/task-list/task-list.component';
import {CourseStudentsComponent} from './course-page/course-students/course-students.component';
import {SystemComponent} from '../system.component';
import {TaskPageComponent} from './task-page/task-page.component';
import {CoursePageComponent} from './course-page/course-page.component';
import {TaskInfoComponent} from './task-page/task-info/task-info.component';
import {TaskSolutionsComponent} from './task-page/task-solutions/task-solutions.component';
import {SolutionAddComponent} from './task-page/solution-add/solution-add.component';


const routes: Routes = [
  {
    path: '', component: SystemComponent,
    children: [
      {
        path: 'courseid', component: CourseComponent,
        children: [
          {
            path: 'course', component: CoursePageComponent, children: [

              {path: 'info', component: CourseInfoComponent},
              {path: 'students', component: CourseStudentsComponent},
              {path: 'tasks', component: TaskListComponent},
            ],
          },
          {
            path: 'taskid', component: TaskPageComponent,
            children: [
              // {
                // path: 'course', component: CoursePageComponent, children: [

                  {path: 'info', component: TaskInfoComponent},
                  {path: 'solutions', component: TaskSolutionsComponent},
                  {path: 'add', component: SolutionAddComponent}
                // ],
              // }
            ]
          }
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
