import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CourseComponent} from './course.component';
import {CourseInfoComponent} from './course-page/course-info/course-info.component';
import {CourseTasksComponent} from './course-page/course-tasks/course-tasks.component';
import {CourseStudentsComponent} from './course-page/course-students/course-students.component';
import {SystemComponent} from '../system.component';
import {SolutionPageComponent} from './solution-page/solution-page.component';
import {ReviewAddComponent} from './solution-page/review-add/review-add.component';
import {SolutionReviewsComponent} from './solution-page/solution-reviews/solution-reviews.component';
import {SolutionInfoComponent} from './solution-page/solution-info/solution-info.component';
import {TaskComponent} from './task/task.component';
import {CoursePageComponent} from './course-page/course-page.component';
import {TaskInfoComponent} from './task/task-page/task-info/task-info.component';
import {TaskSolutionsComponent} from './task/task-page/task-solutions/task-solutions.component';
import {SolutionAddComponent} from './task/task-page/solution-add/solution-add.component';
import {TaskPageComponent} from './task/task-page/task-page.component';
import {TaskAddComponent} from './course-page/task-add/task-add.component';
import {CriteriaAddComponent} from './task/task-page/criteria-add/criteria-add.component';
import {CourseInviteComponent} from './course-page/course-invite/course-invite.component';
import {ReviewPageComponent} from './solution-page/review-page/review-page.component';


const routes: Routes = [
  {
    path: '', component: SystemComponent,
    children: [
      {
        path: 'system/:courseid', component: CourseComponent,
        children: [
          {
            path: 'course', component: CoursePageComponent, children: [
              {path: 'info', component: CourseInfoComponent},
              {path: 'students', component: CourseStudentsComponent},
              {path: 'tasks', component: CourseTasksComponent},
              {path: 'add', component: TaskAddComponent},
              {path: 'invite', component: CourseInviteComponent}
            ],
          },
          {
            path: ':taskid', component: TaskComponent,
            children: [
              {
                path: 'task', component: TaskPageComponent,
                children: [
                  {path: 'info', component: TaskInfoComponent},
                  {path: 'solutions', component: TaskSolutionsComponent},
                  {path: 'add-solution', component: SolutionAddComponent}
                  // {path: 'add-criteria', component: CriteriaAddComponent}
                ]
              },
              {
                path: ':solutionid', component: SolutionPageComponent,
                children: [
                  {path: 'info', component: SolutionInfoComponent},
                  {
                    path: 'reviews', component: SolutionReviewsComponent, children: [
                      {path: ':reviewid', component: ReviewPageComponent},
                    ]
                  },
                  {path: 'add', component: ReviewAddComponent}
                ]
              }
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
