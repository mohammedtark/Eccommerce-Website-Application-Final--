import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService,private _Router:Router){}

  errMsg:string='';
  isLoading:boolean = false;

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
    rePassword: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, { validators: this.confirmPasswordValidator() }); // تم استدعاء الدالة مباشرة هنا

  confirmPasswordValidator(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      const password = group.get('password');
      const rePassword = group.get('rePassword');

      if (!rePassword) {
        return null;
      }

      if (rePassword.value === '') {
        rePassword.setErrors({ required: true });
        return { required: true };
      }

      if (password && password.value !== rePassword.value) {
        rePassword.setErrors({ mismatch: true });
        return { mismatch: true };
      }

      rePassword.setErrors(null);
      return null;
    };
  }

  handleFrom(): void {
   const userData = this.registerForm.value;
  this.isLoading=true;
   if (this.registerForm.valid == true) {
this._AuthService.register(userData).subscribe({
  next:(response)=>{
if (response.message == "success") {
  this.isLoading=false;
  this._Router.navigate(['/login'])
}
  },
  error:(err)=>{
this.errMsg = err.error.message
this.isLoading=false;
  }
})
   }
  }
}
