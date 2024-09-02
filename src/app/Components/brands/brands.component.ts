import { NgxPaginationModule } from 'ngx-pagination';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Brands } from 'src/app/core/interface/brands';
import { BrandsService } from 'src/app/core/services/brands.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule,FormsModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  BrandsDetails: Brands[] = [];
  selectedBrand: Brands | null = null;

  constructor( private _brandsService: BrandsService) {}
  ngOnInit(): void {
    this._brandsService.getAllBrands().subscribe({
      next: (res) => {
        console.log(res);
        this.BrandsDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  openModal(brand: Brands): void {
    this.selectedBrand = brand;
  }

  closeModal(): void {
    this.selectedBrand = null;
  }
  // brands.component.ts
}
