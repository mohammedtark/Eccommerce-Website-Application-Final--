import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhishlistService } from 'src/app/core/services/whishlist.service';
import { product } from 'src/app/core/interface/product';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-whislist',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttextPipe],
  templateUrl: './whislist.component.html',
  styleUrls: ['./whislist.component.scss']
})
export class WhislistComponent implements OnInit {

  products: product[] = [];
  wishListData: string[] = [];

  constructor(
    private _WhishlistService: WhishlistService,
    private _ToastrService: ToastrService,
    private _Renderer2: Renderer2,
    private _CartService: CartService
  ) {}

  ngOnInit(): void {
    this._WhishlistService.getWhishlist().subscribe({
      next: (response) => {
        this.products = response.data;
        this.wishListData = response.data.map((item: any) => item._id);
      }
    });

    // Update count from service on initialization

  }

  addFav(proId: string | undefined): void {
    this._WhishlistService.addToWhishlist(proId).subscribe({
      next: (response) => {
        this._ToastrService.success(response.message);
        this.wishListData = response.data.map((item: any) => item._id);
        this._WhishlistService.updateWhishlistCount();
      }
    });
  }

  addProduct(id: any, element: HTMLButtonElement): void {
    this._Renderer2.setAttribute(element, 'disabled', 'true');
    this._CartService.AddToCart(id).subscribe({
      next: (response) => {
        this._ToastrService.success("It has been successfully added. \u{1f6fa}");
        this._Renderer2.removeAttribute(element, 'disabled');
        this._CartService.cartNumber.next(response.numOfCartItems);
      },
      error: (err) => {
        this._Renderer2.removeAttribute(element, 'disabled');
      }
    });
  }

  removeFAV(prod: string | undefined): void {
    if (!prod) return; // Check if the product ID is valid

    this._WhishlistService.RemoveWhishlist(prod).subscribe({
      next: (response) => {
        this._ToastrService.success(response.message);

        // Update the wishlist count
        this._WhishlistService.updateWhishlistCount();

        // Remove the specific item from the wishlist data
        this.wishListData = this.wishListData.filter((itemId: string) => itemId !== prod);

        // Remove the specific product from the products array
        this.products = this.products.filter((item: product) => item._id !== prod);
      },
      error: (err) => {
        // Handle any error cases here, such as displaying an error message
        this._ToastrService.error('Failed to remove item from wishlist.');
      }
    });
  }
}
