import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userInfotmation:any;

  constructor(private _HttpClient:HttpClient) { }

  baseUrl:string = `https://ecommerce.routemisr.com/api/v1/auth/`

  register(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `signup`,userData)
  }

  login(userData:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl + `signin`,userData)
  }

  decodeUser():void{
    if (localStorage.getItem('etoken')!== null) {
    const encode = localStorage.getItem('etoken')
    if (encode != null) {
    const decode = jwtDecode(encode);

    this.userInfotmation = decode;
    console.log(decode)
}
    }
  }
}
