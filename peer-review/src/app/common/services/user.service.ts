import {Injectable} from '@angular/core';
import {Api} from '../core/api';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService extends Api {

  constructor(public http: HttpClient) {
    super(http);
  }

  getUserById(token: string, userId: number): Observable<UserModel> {

    return this.get(`users?email=${userId}`)
      .map((user: UserModel[]) => user[0] ? user[0] : undefined);
  }

  getUserByLogin(login: string) {

  }

  updateUser(token: string, user: UserModel) {
  }
}