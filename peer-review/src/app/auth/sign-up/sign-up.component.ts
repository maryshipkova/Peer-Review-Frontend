import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../common/services/user.service';
import {AuthService} from '../../common/services/auth.service';
import {UserModel} from '../../common/models/user.model';

@Component({
  selector: 'peer-review-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  isLoaded = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
              private router: Router, private userService: UserService) {

  }


  ngOnInit() {
    this.createForm();
    this.isLoaded = true;
  }

  createForm() {
    this.form = this.formBuilder.group({
      'login': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'biography': ['']

    });
  }

  onSubmit() {
    const user = new UserModel(this.form.value.login,
      this.form.value.email,
      this.form.value.password,
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.biography);
    this.authService.signUp(user).subscribe(data => console.log(data));
    this.router.navigate(['/auth/login']);
  }

}
