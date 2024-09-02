import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deteils',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './deteils.component.html',
  styleUrls: ['./deteils.component.scss']
})
export class DeteilsComponent implements OnInit {
constructor(private _ActivatedRoute:ActivatedRoute , private _ProductService: ProductService , private _Renderer2:Renderer2,private _CartService:CartService,private _ToastrService:ToastrService){}
productId!:string|null;
productDeteils:any = null;

ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.productId = params.get('id');

      }
    })
    this._ProductService.getProductDeteils(this.productId).subscribe({
      next:({data})=>{
this.productDeteils=data;
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


productDeteilsOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  items:1,
  nav: true
}
}

