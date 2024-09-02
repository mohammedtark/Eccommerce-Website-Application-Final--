import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; // Updated import
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute, private _CartService: CartService) {} // Updated Router injection

  cartId: string | null = '';

  orderForm: FormGroup = new FormGroup({
    details: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl('', [Validators.required])
  });

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
    rePassword: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)])
  }, { validators: this.confirmPasswordValidator() });

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

  handleForm(): void {
    console.log(this.orderForm.value);
    this._CartService.CheckOut(this.cartId, this.orderForm.value).subscribe({
      next: (response) => {
        if (response.status === "success") {
          window.location.href = response.session.url;
        }
      }
    });
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.cartId = params.get('id');
      }
    });
  }
}
