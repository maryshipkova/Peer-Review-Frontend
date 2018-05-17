import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Api} from '../../../common/core/api';
import {CourseModel} from '../../../common/models/course.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CourseService extends Api {

  constructor(public http: HttpClient) {
    super(http);
  }

  createCourse(token: string, course: CourseModel): Observable<CourseModel> {
    return this.post('url', [token, course]);
  }

  getCourseById(token: string, courseId: number): Observable<CourseModel> {
    return this.get('url');
  }

  getCourseListByUser(token: string, userId: number): Observable<CourseModel[]> {
    return this.get('url');
  }

  inviteUser(userId: string, token: number, courseId: number): Observable<CourseModel> {
    return this.post('url', [userId, token, courseId]);
  }

  isMember(token: number, courseId: number): Observable<CourseModel> {
    return this.get('url');
  }
}
