import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService:CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.categories = this.categoryService.getAll();
  }

  deleteCategory(id: number  | undefined) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        this.categories.splice(i, 1);
        alert('Xóa thành công');
        return;
      }
    }
  }
}
