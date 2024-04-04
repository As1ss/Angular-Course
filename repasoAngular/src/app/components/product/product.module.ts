import { NgModule } from "@angular/core";
import { ProductItemComponent } from "./product-item.component";
import { ProductListComponent } from "./product-list.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations:[ProductItemComponent,
  ProductListComponent],
  imports:[CommonModule],
  exports:[
    ProductItemComponent,
    ProductListComponent
  ]
})export class ProductModule{

}
