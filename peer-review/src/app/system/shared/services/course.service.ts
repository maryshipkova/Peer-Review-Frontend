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

  createCourse(course: CourseModel)
    : Observable<CourseModel> {
    this.params = new HttpParams({
        fromObject: JSON.parse(JSON.stringify(course))
      }
    );

    return this.post(`Course`, this.params);
  }

  getCourseById(courseId: string): Observable<CourseModel> {
    return this.get(`courses/GetById/${courseId}`);
  }

  getCourseListByUser(): Observable<CourseModel[]> {
    return this.get(`courses/GetByUser`);
  }

  inviteUser(userId: string, token: string, courseId: number): Observable<CourseModel> {
    return this.post('url', [userId, token, courseId]);
  }

  isMember(token: string, courseId: string): Observable<CourseModel> {
    return this.get('url');
  }
}
