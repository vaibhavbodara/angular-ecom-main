import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
// import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-seller-home',
  standalone:true,
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
  schemas:[NO_ERRORS_SCHEMA],
  imports:[NgFor]
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | product[];
  productMessage: undefined | string;
  // icon = faTrash;
  // iconEdit=faEdit;
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted';

        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }

  list() {
    this.product.productList().subscribe((result) => {
      if (result) {
        this.productList = result;
      }
    });
  }
}
