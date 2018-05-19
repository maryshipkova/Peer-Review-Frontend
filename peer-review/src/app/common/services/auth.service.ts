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
    // this.params = new HttpParams({
    //   fromObject: {
    //     Login: login,
    //     Password: password
    //   }
    // });
    const par = {
      'Login': login,
      'Password': password
    };
    return this.post(`users/Sign-in`, par
      // {
      //    'params': this.params
      //  }
    );
  }
}
