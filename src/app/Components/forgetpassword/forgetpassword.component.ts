import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ForgetpasswordService } from 'src/app/core/services/forgetpassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {
  constructor(private _ForgetpasswordService: ForgetpasswordService, private _Router: Router) {}

  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  email: string = '';
  userMsg: string = '';

  forgetForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  resetcodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6)
    ])
  });

  resetPasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6) // Adding max length validation
    ])
  });

  forgetPassword(): void {
    let userEmail = this.forgetForm.value; // {email: value}
    this.email = userEmail.email;
    this._ForgetpasswordService.forgetpassword(userEmail).subscribe({
      next: (response) => {
        console.log(response);
        this.userMsg = response.message;
        this.step1 = false;
        this.step2 = true;
      },
      error: (err) => {
        this.userMsg = err.error.message;
      }
    });
  }

  resetcode(): void {
    let resetCode = this.resetcodeForm.value; // {resetCode: 222322}
    this._ForgetpasswordService.resetCode(resetCode).subscribe({
      next: (response) => {
        console.log(response);
        this.userMsg = response.status;
        this.step2 = false;
        this.step3 = true;
      },
      error: (err) => {
        this.userMsg = err.error.message;
      }
    });
  }

  resetPassword(): void {
    let resetForm = this.resetPasswordForm.value; // {newPassword: value}
    resetForm.email = this.email;
    this._ForgetpasswordService.resetPassword(resetForm).subscribe({
      next: (response) => {
        console.log(response);
        if (response.token) {
          localStorage.setItem('etoken', response.token);
          this._Router.navigate(['/home']);
        }
      },
      error: (err) => {
        this.userMsg = err.error.message;
      }
    });
  }
}
