import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrdersService } from 'src/app/core/services/orders.service';
import { Orders } from 'src/app/core/interface/orders';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit {
  orders: Orders[] = [];
  errorMessage: string = '';

  constructor(private _OrdersService: OrdersService) {}

  ngOnInit(): void {
    this._OrdersService.getOrders().subscribe({
      next: (res) => {
        // ترتيب الطلبات بناءً على تاريخ الدفع
        this.orders = res.data.sort((a: Orders, b: Orders) => {
          if (a.paidAt && b.paidAt) {
            return new Date(b.paidAt).getTime() - new Date(a.paidAt).getTime(); // ترتيب تنازلي
          }
          return 0;
        });
        console.log(res);
      },
      error: (err) => {
        console.log('Error:', err);
        this.errorMessage = err.message || 'An error occurred while fetching orders.';
      }
    });
  }

  getPaidOrderCount(): number {
    return this.orders.filter(order => order.isPaid).length;
  }

  getUnpaidOrderCount(): number {
    return this.orders.filter(order => !order.isPaid).length;
  }

}
