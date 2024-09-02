import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl:string = `https://ecommerce.routemisr.com/api/v1/`
  getcategoriess():Observable<any>{
    return this._HttpClient.get(this.baseUrl+'categories')
  }
}
