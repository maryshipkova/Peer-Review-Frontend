import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Api} from '../core/api';

@Injectable()
export class AuthService extends Api {

  constructor(public http: HttpClient) {
    super(http);
  }

  signUp(login: string, password: string) {  //etc
  }

  signOut(token: string) {
  }

  signIn(login: string, password: string) {
  }
}
