import { Component, ElementRef, Output } from "@angular/core";
import { CartItem } from './shopping-cart-item/shopping-cart-item.interface';


@Component({
  selector:"shopping-cart",
  templateUrl:"shopping-cart.component.html"
}) export class ShoppingCartComponent{




  public cartItems:CartItem[]=[{
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


deleteItem(item:CartItem):void{
  this.cartItems.splice(this.cartItems.indexOf(item),1);
}

sumaTodo():number{

  let suma:number=0;

  for (let item of this.cartItems){
    suma += item.price;
  }
  return suma;
}


}
