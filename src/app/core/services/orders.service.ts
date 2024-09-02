import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private _httpClient: HttpClient) {}

  getOrders(): Observable<any> {
    // Use backticks for string interpolation and properly enclose the URL
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/`);
  }
  ClearOrders():Observable<any>{
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/orders/`)
  }
}
