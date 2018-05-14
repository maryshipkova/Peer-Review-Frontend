import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseRoutingModule} from './couse-routing.module';
import {TaskListComponent} from './course-page/task-list/task-list.component';
import {TaskPageComponent} from './task-page/task-page.component';
import {CourseStudentsComponent} from './course-page/course-students/course-students.component';
import {SolutionPageComponent} from './solution-page/solution-page.component';
import {CourseInfoComponent} from './course-page/course-info/course-info.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CoursePageComponent} from './course-page/course-page.component';
import {CourseComponent} from './course.component';
import { TaskInfoComponent } from './task-page/task-info/task-info.component';
import { TaskSolutionsComponent } from './task-page/task-solutions/task-solutions.component';
import { SolutionAddComponent } from './task-page/solution-add/solution-add.component';

@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule
  ],
  declarations: [
    CourseComponent,
    TaskPageComponent,
    SolutionPageComponent,
    SidebarComponent,
    TaskListComponent,
    CoursePageComponent,
    CourseInfoComponent,
    CourseStudentsComponent,
    TaskInfoComponent,
    TaskSolutionsComponent,
    SolutionAddComponent
  ]
})
export class CourseModule { }
