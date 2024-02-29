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
  loading = false;

  constructor(
    private form: FormBuilder,
    private router: Router,
    private service: userloginService,
    private token: jwtToken
  ) {}
  ngOnInit(): void {
    this.loginForm = this.form.group({
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          ),
        ],
      ],
    });
  }

  onSubmit() {
    this.loading = true;

    const { phone, password } = this.loginForm.value;
    this.service.login(phone, password).subscribe({
      next: (response) => {
        if (response.isAdmin) {
          console.log('hello');
          this.token.setToken(response.token);
          localStorage.setItem('type', response.type);
          this.router.navigate(['/admin/home']);
        } else {
          this.token.setToken(response.token);
          localStorage.setItem('type', response.type);
          this.msg = response.message;
          this.router.navigate(['']);
        }
      },
      error: (response) => {
        this.loading = false;
        this.msg = response.error.message;
      },
    });
  }
}
