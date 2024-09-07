import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {
  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/`;
  WhishlistCount: BehaviorSubject<number> = new BehaviorSubject(0); // Holds the current count

  constructor(private _HttpClient: HttpClient) {
    // Initialize count when the service is first used
    this.updateWhishlistCount();
  }

  addToWhishlist(proId: string | undefined): Observable<any> {
    return this._HttpClient.post(this.baseUrl + `wishlist`, { productId: proId })
      .pipe(
        tap(() => this.updateWhishlistCount()) // Update count after adding
      );
  }

  getWhishlist(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `wishlist`);
  }

  updateWhishlistCount(): void {
    this.getWhishlist().subscribe({
      next: (response) => {
        this.WhishlistCount.next(response.count); // Update count based on current wishlist items
      }
    });
  }

  RemoveWhishlist(prod: string | undefined): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `wishlist/${prod}`)
      .pipe(
        tap(() => this.updateWhishlistCount()) // Update count after removing
      );
  }
}
