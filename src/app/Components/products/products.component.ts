import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { product } from 'src/app/core/interface/product';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WhishlistService } from 'src/app/core/services/whishlist.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,CuttextPipe,NgxPaginationModule,SearchPipe,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  products:product[]=[];
  wishListData:string[]=[]
   term:string=''
  pageSize:number =0;//limit
  currentPage:number =1;
  total :number = 0;
  constructor(private _ProductService:ProductService,private _Renderer2:Renderer2,private _CartService:CartService,private _ToastrService: ToastrService , private _WhishlistService:WhishlistService){}

  ngOnInit(): void {
    this._ProductService.getProducts().subscribe({
      next:(response)=>{
        console.log('Product', response.data)
        this.products=response.data;
        this.pageSize = response.metadata.limit;
        this.currentPage = response.metadata.currentPage;
        this.total = response.results
      }
    });
  }
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

  pageChanged(event:any):void{
    this._ProductService.getProducts(event).subscribe({
      next:(response)=>{
        console.log('Product', response.data)
        this.products=response.data;
        this.pageSize = response.metadata.limit;
        this.currentPage = response.metadata.currentPage;
        this.total = response.results
      }
    });
  }

  addFav(proId:string |undefined):void{
    this._WhishlistService.addToWhishlist(proId).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message)
        this.wishListData = response.data
      }
    })
  }
  removeFAV(prod:string |undefined):void{
    this._WhishlistService.RemoveWhishlist(prod).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message)
        this.wishListData = response.data
      }
    })
  }
}
