import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SecondComponent } from "./second/second.component";


@NgModule({
  declarations:[
    SecondComponent
  ],
  imports: [CommonModule],
  exports:[
    SecondComponent
  ]
})export class InventoryModule{

}
