import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Api} from '../core/api';


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

  signOut() {
    this.params = new HttpParams({
      fromObject: {
        token: this.TokenData,
        userId: this.UserId
      }
    });
    return this.post(`users/Sign-out`, {
        'params': this.params
      }
    );
  }

  signIn(login: string, password: string) {
    return this.postWithoutParams(`users/Sign-in`,
      {
        'Login': '5MZBV8HOJ9JFBJV',
        'Password': 'T7S5T0MRMO07OQL'
      });
  }
}
