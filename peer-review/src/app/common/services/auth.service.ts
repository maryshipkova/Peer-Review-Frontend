import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Api} from '../core/api';
import {UserModel} from '../models/user.model';

@Injectable()
export class AuthService extends Api {

  constructor(public http: HttpClient) {
    super(http);
  }

  signUp(login: string, password: string) {  // etc
    // this.params = new HttpParams({
    //   fromObject: {
    //     token: token,
    //     userId: userId
    //   }
    // });
    return this.post(`users/Sign-up`, {
        'params': this.params
      }
    );
  }

  signOut(token: string, userId: string) {
    this.params = new HttpParams({
      fromObject: {
        token: token,
        userId: userId
      }
    });
    return this.post(`users/Sign-out`, {
        'params': this.params
      }
    );
  }

  signIn(login: string, password: string) {

    // test
    this.params = new HttpParams({fromObject: {
        'Login': '5MZBV8HOJ9JFBJV',
        'Password': 'T7S5T0MRMO07OQL'
      }});
    return this.post(`users/Sign-in`, this.params);
  }
}
