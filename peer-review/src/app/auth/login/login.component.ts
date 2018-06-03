import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../common/services/auth.service';
import {Router} from '@angular/router';
import {UserModel} from '../../common/models/user.model';
import {UserService} from '../../common/services/user.service';
import {Message} from '../../common/models/message.model';

@Component({
  selector: 'peer-review-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: Message;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.message = new Message('danger', '');
  }

  onSubmit(form: NgForm) {
    const {login, password} = form.value;

    this.authService.signIn(login, password).subscribe(data => {
        window.localStorage.setItem('token', data.TokenData);
        window.localStorage.setItem('userId', data.UserId);
        this.userService.getUserById(data.UserId).subscribe(
          (user: UserModel) => window.localStorage.setItem('username', user.Login));

        this.router.navigate(['/home']);

      },
      err => {
        console.log(err);
        this.message.showMessage(err.status === 400 ? 'Write correct data' : err.statusText, 'danger');
      });
  }

}
