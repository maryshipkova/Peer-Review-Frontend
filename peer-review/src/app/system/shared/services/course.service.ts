import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Api} from '../../../common/core/api';
import {CourseModel} from '../../../common/models/course.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CourseService extends Api {


  constructor(public http: HttpClient) {
    super(http);
  }

  createCourse(course: CourseModel, token: string = window.localStorage.token): Observable<CourseModel> {
    return this.post('url', [token, course]);
  }

  getCourseById(courseId: string, token: string = window.localStorage.token): Observable<CourseModel> {
    return this.get('url');
  }

  getCourseListByUser(TokenData: string = window.localStorage.token, UserId: string = window.localStorage.userId): Observable<CourseModel[]> {

    return this.get(`courses/GetByUser?TokenData=${TokenData}&UserId=${UserId}`);
  }

  inviteUser(userId: string, token: string, courseId: number): Observable<CourseModel> {
    return this.post('url', [userId, token, courseId]);
  }

  isMember(token: string, courseId: string): Observable<CourseModel> {
    return this.get('url');
  }
}
