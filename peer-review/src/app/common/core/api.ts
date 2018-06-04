import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {CourseModel} from '../models/course.model';

@Injectable()
export class Api {

  private baseUrl = 'http://reviewyourselfproject.azurewebsites.net/api/';
  protected params: HttpParams;
  protected TokenData: string = window.localStorage.token;
  protected UserId: string = window.localStorage.userId;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Access-Control-Allow-Origin': '*'

    })
  };

  // 'Access-Control-Allow-Origin': '*'}


  constructor(public http: HttpClient) {

  }

  private setData() {
    this.TokenData = window.localStorage.token;
    this.UserId = window.localStorage.userId;
  }

  private getUrl(url: string = ''): string {
    if (!this.TokenData) this.setData();
    return this.baseUrl + url + `?TokenData=${this.TokenData}&UserId=${this.UserId}`;
  }

  private getPureUrl(url: string = ''): string {
    return this.baseUrl + url;
  }


  public get(url: string = ''): Observable<any> {
    console.log('get', url);
    return this.http.get(this.getUrl(url)); // .subscribe(data => console.log(data));
  }

  public post(url: string = '', data: any = {}): Observable<any> {
    console.log('post', data);
    return this.http.post(this.getUrl(url), data, this.httpOptions); // .subscribe(data => console.log(data));
  }

  public put(url: string = '', data: any = {}): Observable<any> {
    return this.http.put(this.getUrl(url), data, this.httpOptions); // .subs
  }
  public delete(url: string = '', data: any = {}): Observable<any> {
    return this.http.delete(url); // TODO
  }
  public postWithoutParams(url: string = '', data: any = {}): Observable<any> {
    console.log('post w/o params', data);
    return this.http.post(this.getPureUrl(url), data, this.httpOptions); // .subscribe(data => console.log(data));
  }
}
