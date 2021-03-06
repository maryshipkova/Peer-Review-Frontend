import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseRoutingModule} from './couse-routing.module';
import {CourseTasksComponent} from './course-page/course-tasks/course-tasks.component';
import {CourseStudentsComponent} from './course-page/course-students/course-students.component';
import {SolutionPageComponent} from './solution-page/solution-page.component';
import {CourseInfoComponent} from './course-page/course-info/course-info.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CoursePageComponent} from './course-page/course-page.component';
import {CourseComponent} from './course.component';
import {SolutionInfoComponent} from './solution-page/solution-info/solution-info.component';
import {SolutionReviewsComponent} from './solution-page/solution-reviews/solution-reviews.component';
import {ReviewAddComponent} from './solution-page/review-add/review-add.component';
import {TaskComponent} from './task/task.component';
import {TaskInfoComponent} from './task/task-page/task-info/task-info.component';
import {TaskSolutionsComponent} from './task/task-page/task-solutions/task-solutions.component';
import {SolutionAddComponent} from './task/task-page/solution-add/solution-add.component';
import {TaskPageComponent} from './task/task-page/task-page.component';
import {TaskAddComponent} from './course-page/task-add/task-add.component';
import {FormsModule} from '@angular/forms';
import {CriteriaAddComponent} from './task/task-page/criteria-add/criteria-add.component';
import {CourseInviteComponent} from './course-page/course-invite/course-invite.component';
import {CourseDataService} from './course-page/course-data.service';
import {TaskDataService} from './task/task-data.service';
import {SolutionDataService} from './solution-page/solution-data.service';
import { ReviewPageComponent } from './solution-page/review-page/review-page.component';
import { SolutionResolveComponent } from './solution-page/solution-resolve/solution-resolve.component';
import { CourseDeleteComponent } from './course-page/course-delete/course-delete.component';

@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule
  ],
  declarations: [
    CourseComponent,
    TaskPageComponent,
    SolutionPageComponent,
    SidebarComponent,
    CourseTasksComponent,
    CoursePageComponent,
    CourseInfoComponent,
    CourseStudentsComponent,
    TaskInfoComponent,
    TaskSolutionsComponent,
    SolutionAddComponent,
    SolutionInfoComponent,
    SolutionReviewsComponent,
    ReviewAddComponent,
    TaskComponent,
    TaskAddComponent,
    CriteriaAddComponent,
    CourseInviteComponent,
    ReviewPageComponent,
    SolutionResolveComponent,
    CourseDeleteComponent
  ], providers: [CourseDataService, TaskDataService, SolutionDataService]
})

export class CourseModule {
}
