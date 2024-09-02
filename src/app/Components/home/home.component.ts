import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import {  product } from 'src/app/core/interface/product';
import { CuttextPipe as CutestPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/core/interface/category';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WhishlistService } from 'src/app/core/services/whishlist.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,CutestPipe,CarouselModule,RouterLink ,SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _ProductService:ProductService , private _CartService:CartService,private _ToastrService: ToastrService , private _Renderer2:Renderer2 , private _WhishlistService:WhishlistService){}


  products:product[]=[];

  catgories:Category[]=[]
  wishListData:string[]=[]
  term:string=''

  ngOnInit(): void {
    this._ProductService.getProducts().subscribe({
      next:(response)=>{
        console.log('Product', response)
        this.products=response.data;
      }
    });

    this._ProductService.getCategories().subscribe({
      next:(response)=>{
        console.log('Categories', response)
        this.catgories=response.data;
      }
    })

    this._WhishlistService.getWhishlist().subscribe({
      next:(response)=>{
        const newData = response.data.map((item:any)=>item._id)
        this.wishListData =newData
      }
    })
  }
//        button Refrence
  addProduct(id :any, element:HTMLButtonElement): void
  {
    this._Renderer2.setAttribute(element,'disabled','true')
    this._CartService.AddToCart(id).subscribe({
      next:(response)=>{
        console.log("hi");
        console.log(response.message);
        this._ToastrService.success("It has been successfully added. \u{1f6fa}")
        this._Renderer2.removeAttribute(element,'disabled');
        this._CartService.cartNumber.next(response.numOfCartItems)
      },
      error: (err)=>{
        this._Renderer2.removeAttribute(element,'disabled');
      }

    })
  }

  addFav(proId:string |undefined):void{
    this._WhishlistService.addToWhishlist(proId).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message)
        this.wishListData = response.data
      }
    })
  }

  CategoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

  removeFAV(prod:string |undefined):void{
    this._WhishlistService.RemoveWhishlist(prod).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message)
        this.wishListData = response.data
      }
    })
  }
  mainSlideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplaySpeed:1000,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    nav: false
  }
}
