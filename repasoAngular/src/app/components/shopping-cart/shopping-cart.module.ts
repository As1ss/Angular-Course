import { NgModule } from "@angular/core";
import { ShoppingCartComponent } from "./shopping-cart.component";
import { ShoppingCartItemComponent } from "./shopping-cart-item/shopping-cart-item.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations:[
    ShoppingCartComponent,
    ShoppingCartItemComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[
    ShoppingCartComponent,
    ShoppingCartItemComponent
  ]
}) export class ShoppingCartModule{

}
