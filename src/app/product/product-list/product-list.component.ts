import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];


  constructor(private productService:ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.products = this.productService.getAll();
  }

  deleteProduct(id: number| undefined) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products.splice(i, 1);
        alert('Xóa thành công');
        return;
      }
    }
  }


}
