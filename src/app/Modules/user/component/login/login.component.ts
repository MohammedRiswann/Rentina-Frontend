import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userloginService } from '../../../../common/services/user-login.service';
import { jwtToken } from '../../../../common/services/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  errormsg: any = '';
  msg: any = '';
  constructor(
    private form: FormBuilder,
    private router: Router,
    private service: userloginService,
    private token: jwtToken
  ) {}
  ngOnInit(): void {
    this.loginForm = this.form.group({
      phone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('clicked');
    const { phone, password } = this.loginForm.value;
    console.log('one');

    this.service.login(phone, password).subscribe({
      next: (response) => {
        console.log(response.token);
        this.token.setToken(response.token);
        localStorage.setItem('type', response.type);
        this.msg = response.message;
        this.router.navigate(['']);
      },
      error: (response) => {
        this.msg = response.error.message;
      },
    });
  }
}
