import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  dataProduct : Array<Product>
  items = [];
  constructor() {
  } 

  ngOnInit() {
    this.dataProduct = [
      {name: "Acadia", location : "test", avatar : "assets/img/product/inspired-product/i2.jpg", description : ""},
      {name: "Hmmms", location : "test", avatar : "assets/img/product/inspired-product/i2.jpg", description : ""},
      {name: "Jorrss", location : "test", avatar : "assets/img/product/inspired-product/i2.jpg", description : ""},
      {name: "Ededede", location : "test", avatar : "assets/img/product/inspired-product/i2.jpg", description : ""}
    ]

  }


}
