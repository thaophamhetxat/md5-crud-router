import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categories: Category[] = [];


  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl()
  })

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const category = this.categoryForm.value;
    this.categoryService.saveCategory(category);
   this.categoryForm.reset();
  }
}
