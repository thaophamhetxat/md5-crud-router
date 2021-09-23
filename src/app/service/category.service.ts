import {Injectable} from '@angular/core';
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [{
    id: 1,
    name: 'bánh'
  }, {
    id: 2,
    name: 'vật dụng'
  }];

  constructor() {
  }

  getAll(){
    return this.categories;
  }

  saveCategory(category: any) {
    this.categories.push(category);
  }

  findById(id: number| undefined) {
    return this.categories.find(category => category.id===id)
  }

  updateCategory(id: number | undefined, category: any) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        this.categories[i] = category;
      }
    }
  }
}
