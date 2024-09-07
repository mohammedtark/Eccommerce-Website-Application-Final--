import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { WhishlistService } from 'src/app/core/services/whishlist.service';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent implements OnInit {
  @ViewChild('navBar') navElement!: ElementRef;

  CratNumber: number = 0;
  WhishlistCt: number = 0;

  constructor(
    private _Router: Router,
    private _CartService: CartService,
    private _WhishlistService: WhishlistService,
    private _Renderer2: Renderer2,
  ) {}

  @HostListener('window:scroll')
  onScroll(): void {
    if (window.scrollY > 500) {
      this._Renderer2.addClass(this.navElement.nativeElement, 'px-5');
      this._Renderer2.addClass(this.navElement.nativeElement, 'shadow');
    } else {
      this._Renderer2.removeClass(this.navElement.nativeElement, 'px-5');
      this._Renderer2.removeClass(this.navElement.nativeElement, 'shadow');
    }
  }

  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next: (count) => {
        this.CratNumber = count;
      }
    });

    this._CartService.getCartUser().subscribe({
      next: (response) => {
        this.CratNumber = response.numOfCartItems;
      }
    });

    this._WhishlistService.WhishlistCount.subscribe({
      next: (count) => {
        console.log('nav', count);
        this.WhishlistCt = count; // Update the nav badge count
      }
    });
  }

  signOut(): void {
    localStorage.removeItem('etoken');
    this._Router.navigate(['/login']);
  }
}
