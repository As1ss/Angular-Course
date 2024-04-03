import { Component, ElementRef, Output } from "@angular/core";
import { CartItem } from "./shopping-cart-item/shopping-cart-item.interface";


@Component({
  selector:"shopping-cart",
  templateUrl:"shopping-cart.component.html"
}) export class ShoppingCartComponent{


  cartItems:CartItem[]=[{
    name:"Auriculares",
    price:255
  },
{
  name:"Teclado",
  price:75
},
{
  name:"Ratón",
  price:50
}]




}
