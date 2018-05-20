import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CourseModel} from '../models/course.model';

@Injectable()
export class Api {

  private baseUrl = 'http://reviewyourselfproject.azurewebsites.net/api/';
  protected params: HttpParams;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' //,
      // 'Access-Control-Allow-Origin': '*'}
    })
  };
  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Access-Control-Allow-Origin': '*'
  //     // ,
  //     // 'Authorization': 'authkey',
  //     // 'userid': '1'
  //   })
  // };

  constructor(public http: HttpClient) {

  }

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public get(url: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url)); // .subscribe(data => console.log(data));
  }

  public post(url: string = '', data: any = {}): Observable<any> {
    console.log(data);
    return this.http.post(this.getUrl(url), data); // .subscribe(data => console.log(data));
  }

  public put(url: string = '', data: any = {}): Observable<any> {
    return this.http.put(this.getUrl(url), data, this.httpOptions); // .subs
  }
}
