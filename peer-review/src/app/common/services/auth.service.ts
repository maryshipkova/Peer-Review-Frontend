import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Api} from '../core/api';
import {UserModel} from '../models/user.model';


@Injectable()
export class AuthService extends Api {

  constructor(public http: HttpClient) {
    super(http);
  }

  signUp(user: UserModel) {  // etc
    return this.postWithoutParams(`users/Sign-up`, user);
  }

  signOut() {

    return this.post(`users/Sign-out`, {
        token: this.TokenData,
        userId: this.UserId
      }
    );
  }

  signIn(login: string, password: string) {
    return this.postWithoutParams(`users/Sign-in`,
      {
        'Login': login,
        'Password': password
      });
  }
}
