import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Api} from '../../../common/core/api';
import {CourseModel} from '../../../common/models/course.model';
import {Observable} from 'rxjs/index';

@Injectable()
export class CourseService extends Api {


  constructor(public http: HttpClient) {
    super(http);
  }

  createCourse(course: CourseModel)
    : Observable<CourseModel> {

    return this.post(`Course`, course);
  }

  getCourseById(courseId: string): Observable<CourseModel> {
    return this.get(`courses/GetById/${courseId}`);
  }

  getCourseListByUser(): Observable<CourseModel[]> {
    return this.get(`courses/GetByUser`);
  }

  getInvitesByUser(): Observable<CourseModel[]> {
    return this.get(`courses/GetInvitesByUser`);
  }

  inviteUser(username: string, courseId: number): Observable<CourseModel> {
    return this.post(`courses/Invite/${courseId}/${username}`);
  }

  acceptInvite(courseId: number): Observable<CourseModel> {
    return this.post(`courses/Accept-Invite/${courseId}`);
  }

  isMember(courseId: string): Observable<CourseModel> {
    return this.get(`courses/IsMember/${courseId}`);
  }

  updateCourse(course: CourseModel)
    : Observable<CourseModel> {

    return this.post(`courses/Update`, course);
  }

  deleteCourse(courseId: string)
    : Observable<CourseModel> {

    return this.delete(`courses/Delete/${courseId}`);
  }

  deleteMember(courseId: string, userId: string)
    : Observable<CourseModel> {

    return this.delete(`courses/Delete-member/${courseId}/${userId}`);
  }
}
