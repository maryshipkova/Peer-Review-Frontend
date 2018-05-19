import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../common/services/auth.service';

@Component({
  selector: 'peer-review-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const {login, password} = form.value;
    // console.log(login, password);
    this.authService.signIn(login, password).subscribe(data => {
      console.log(data);
    });
  }
}
