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
  imports: [CommonModule,RouterLink , CuttextPipe],
  templateUrl: './whislist.component.html',
  styleUrls: ['./whislist.component.scss']
})
export class WhislistComponent implements OnInit {

  constructor(private _WhishlistService:WhishlistService,private _ToastrService:ToastrService , private _Renderer2:Renderer2 , private _CartService:CartService){}

  products:product[]=[];
  wishListData:string[]=[]
  ngOnInit(): void {
    this._WhishlistService.getWhishlist().subscribe({
      next:(response)=>{
        console.log(response)
        this.products = response.data
        const newData = response.data.map((item:any)=>item._id)
        this.wishListData =newData
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

  removeFAV(prod:string |undefined):void{
    this._WhishlistService.RemoveWhishlist(prod).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message)
        this.wishListData = response.data
        const newProductData = this.products.filter((item:any)=>this.wishListData.includes(item._id))
        this.products=newProductData
      }
    })
  }
}
