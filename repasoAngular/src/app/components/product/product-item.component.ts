import { Component, Input, OnInit } from "@angular/core";
import { Product } from "./product.interface";



@Component({
  selector:"product-item",
  templateUrl:"product-item.component.html"
})export class ProductItemComponent implements OnInit{


  @Input()
  productItem!:Product;

  @Input() index?: number; // Añade esta línea





  ngOnInit(): void {
    if(!this.productItem) throw new Error("You need a item property.");
  }




}
