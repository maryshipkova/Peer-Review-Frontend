import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Api {
  private baseUrl = 'http://reviewyourselfproject.azurewebsites.net/';

  constructor(public http: HttpClient) {

  }

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public get(url: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url)); // .subscribe(data => console.log(data));
  }

  public post(url: string = '', data: any = {}): Observable<any> {
    return this.http.post(this.getUrl(url), data); // .subscribe(data => console.log(data));
  }

  public put(url: string = '', data: any = {}): Observable<any> {
    return this.http.put(this.getUrl(url), data); // .subscribe(data => console.log(data));
  }

}