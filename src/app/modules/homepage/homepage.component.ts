import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  dataProduct : Array<Product>
  items = [];
  constructor() {
  } 

  ngOnInit() {
    this.dataProduct = [
      /*
      {name: "Acadia", location : "test", avatar : "assets/img/product/inspired-product/i2.jpg", description : ""},
      {name: "Hmmms", location : "test", avatar : "assets/img/product/inspired-product/i2.jpg", description : ""},
      {name: "Jorrss", location : "test", avatar : "assets/img/product/inspired-product/i2.jpg", description : ""},
      {name: "Ededede", location : "test", avatar : "assets/img/product/inspired-product/i2.jpg", description : ""},
      */
      {id: 1, name: "Keylacopier • Owner", avatar : "assets/img/product/keylafc.png", address: "Jl. Kaliurang KM.13 Besi, Sukoharjo, Ngaglik, Sleman", openOrder: "07.00 - 23.00 WIB"},
      {id: 2, name: "Dummy Data • Owner", avatar : "assets/img/product/keylafc.png", address: "Jl. Kaliurang KM.13 Besi, Sukoharjo, Ngaglik, Sleman", openOrder: "07.00 - 23.00 WIB"},
      {id: 3, name: "Dummy Data 2 • Owner", avatar : "assets/img/product/keylafc.png", address: "Jl. Kaliurang KM.13 Besi, Sukoharjo, Ngaglik, Sleman", openOrder: "07.00 - 23.00 WIB"},
      {id: 4, name: "Dummy Data 3 • Owner", avatar : "assets/img/product/keylafc.png", address: "Jl. Kaliurang KM.13 Besi, Sukoharjo, Ngaglik, Sleman", openOrder: "07.00 - 23.00 WIB"},
    ]

  }


}
