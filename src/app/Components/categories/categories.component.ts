import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Category } from 'src/app/core/interface/category';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
constructor(private _CategoriesService:CategoriesService){}
selectedcategories: Category | null = null;
  categoryData: Category[] = [];

  ngOnInit(): void {
    this._CategoriesService.getcategoriess().subscribe({
      next: (res) => {
        console.log(res);
        this.categoryData = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  opencategories(categories: Category): void {
    this.selectedcategories = categories;
  }
}
