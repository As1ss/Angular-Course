import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from "./shopping-cart-item.interface";


@Component({
  selector:"shopping-cart-item",
  templateUrl:"shopping-cart-item.component.html"
})export class ShoppingCartItemComponent implements OnInit{




  @Input()
   cartItem!:CartItem;


   @Output()
   cartItemDelete = new EventEmitter<void>();

   constructor(){}

   ngOnInit(): void {
   if(!this.cartItem) throw new Error("No hay item");
  }


  onClickDeletedItem():void{
    this.cartItemDelete.emit();
  }



}
