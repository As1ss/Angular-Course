import { Component } from "@angular/core";
import { Product } from "./product.interface";



@Component({
  selector:"product-list",
  templateUrl:"product-list.component.html"
}) export class ProductListComponent{

  productList:Product[]=[
    {
      name:"Chancleta",
      price:20
    },
    {
      name:"Toalla",
      price:10
    }
  ]

}


