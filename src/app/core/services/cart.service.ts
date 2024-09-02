import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string = `https://ecommerce.routemisr.com/api/v1/`

  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);

  AddToCart(prodId : string):Observable<any>{
    return this._HttpClient.post(this.baseUrl+`cart` ,
      {
        productId: prodId
      }
    )
  }

  getCartUser():Observable<any>{
    return this._HttpClient.get(this.baseUrl +  `cart`,
    )
  }

  UpdataCartProductQuantity(id:string,count:number):Observable<any>{
    return this._HttpClient.put( this.baseUrl +`cart/${id}`,{
      count:count
    })
  }


  removeItem(prodId:string):Observable<any>{
    return this._HttpClient.delete(this.baseUrl +  `cart/${prodId}`,)
  }

  ClearCart():Observable<any>{
    return this._HttpClient.delete(this.baseUrl +  `cart`,
    )
  }
  CheckOut(cartId:string|null , orderInfo:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress:orderInfo
      }
    )
  }
}
