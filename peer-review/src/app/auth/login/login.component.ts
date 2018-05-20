import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../common/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'peer-review-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const {login, password} = form.value;
    // console.log(login, password);
    this.authService.signIn(login, password).subscribe(data => {
      window.localStorage.setItem('token', data.TokenData);
      window.localStorage.setItem('userId', data.UserId);
      this.router.navigate(['/home']);
    });
  }
}
