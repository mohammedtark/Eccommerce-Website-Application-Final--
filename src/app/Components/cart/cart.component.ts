import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { Cart } from 'src/app/core/interface/cart';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _CartService: CartService, private _Renderer2: Renderer2) {}

  cart: Cart | null = null; // Allow cart to be null

  ngOnInit(): void {
    this.getCart();
  }

  getCart(): void {
    this._CartService.getCartUser().subscribe({
      next: (res) => {
        console.log(res);
        this.cart = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updataCart(id: string, count: number, ele1?: HTMLButtonElement, ele2?: HTMLButtonElement) {
    if (count > 0) {
      if (ele1 && ele2) {
        this._Renderer2.setAttribute(ele1, 'disabled', 'true');
        this._Renderer2.setAttribute(ele2, 'disabled', 'true');
      }
      this._CartService.UpdataCartProductQuantity(id, count).subscribe({
        next: (res) => {
          console.log(res);
          this.cart = res;
          if (ele1 && ele2) {
            this._Renderer2.removeAttribute(ele1, 'disabled');
            this._Renderer2.removeAttribute(ele2, 'disabled');
          }
        },
        error: (err) => {
          console.log(err);
          if (ele1 && ele2) {
            this._Renderer2.removeAttribute(ele1, 'disabled');
            this._Renderer2.removeAttribute(ele2, 'disabled');
          }
        }
      });
    } else {
      this.removeItem(id);
    }
  }

  removeItem(id: string, element?: HTMLButtonElement) {
    if (element) {
      this._Renderer2.setAttribute(element, 'disabled', 'true');
    }
    this._CartService.removeItem(id).subscribe({
      next: (res) => {
        console.log(res);
        this.cart = res;
        if (element) {
          this._Renderer2.removeAttribute(element, 'disabled');
          this._CartService.cartNumber.next(res.numOfCartItems)
        }
      },
      error: (err) => {
        console.log(err);
        if (element) {
          this._Renderer2.removeAttribute(element, 'disabled');
        }
      }
    });
  }

  Clear(): void {
    this._CartService.ClearCart().subscribe({
      next: (res) => {
        if (res.message === 'success') {
          this.cart = null; // This is now allowed
          this._CartService.cartNumber.next(0)
        }
      }
    });
  }
}
