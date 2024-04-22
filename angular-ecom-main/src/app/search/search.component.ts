import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-search',
  standalone:true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports:[RouterLink,NgFor]
})
export class SearchComponent implements OnInit {

  searchResult: undefined | product[]
  constructor(private activeRoute: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query');
    console.warn(query);
    query && this.product.searchProduct(query).subscribe((result) => {
      this.searchResult = result;

    })


  }

}
