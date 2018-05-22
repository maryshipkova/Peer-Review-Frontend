import {Injectable} from '@angular/core';
import {Api} from '../core/api';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs/index';


@Injectable()
export class UserService extends Api {

  constructor(public http: HttpClient) {
    super(http);
  }

  getUserById(TokenData: string = window.localStorage.token, UserId: number = window.localStorage.userId): Observable<UserModel> {
    return this.get(`User`);
  }

  getUserByLogin(login: string) {

  }

  updateUser(token: string, user: UserModel) {
  }
}
