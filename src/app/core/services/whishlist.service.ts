import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {
  baseUrl:string = `https://ecommerce.routemisr.com/api/v1/`
  constructor(private _HttpClient:HttpClient) { }
  WhishlistNumber1:BehaviorSubject<number> = new BehaviorSubject(0);

  addToWhishlist(proId:string |undefined):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `wishlist`,
      {
        productId: proId //ProductId
      }
    )
  }

  getWhishlist():Observable<any>{
    return this._HttpClient.get(this.baseUrl + `wishlist` )
  }

  RemoveWhishlist(prod:string |undefined):Observable<any>{
    return this._HttpClient.delete(this.baseUrl + `wishlist/${prod}` )
  }
  getWhishlistUser():Observable<any>{
    return this._HttpClient.get(this.baseUrl +  `wishlist`,
    )
  }
}
