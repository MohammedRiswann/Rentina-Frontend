import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userloginService } from '../services/user-login.service';

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
    private service: userloginService
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

    this.service.login(phone, password).subscribe({
      next: (response) => {
        this.msg = response.message;
        this.router.navigate(['home']);
      },
      error: (response) => {
        this.msg = response.error.message;
      },
    });
  }
}
