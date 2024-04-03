import { Component, Input, OnInit } from "@angular/core";
import { CartItem } from "./shopping-cart-item.interface";


@Component({
  selector:"shopping-cart-item",
  templateUrl:"shopping-cart-item.component.html"
})export class ShoppingCartItemComponent implements OnInit{




  @Input()
   cartItem!:CartItem;

   constructor(){}

   ngOnInit(): void {
   if(!this.cartItem) throw new Error("No hay item");
  }


  // deleteItem(cartItem:CartItem):void{

  //   this.cartItems.slice(this.cartItems.indexOf(cartItem),1);
  // }


}
