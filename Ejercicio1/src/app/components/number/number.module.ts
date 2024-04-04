import { NgModule } from "@angular/core";
import { NumberItemComponent } from "./number-item/number-item.component";
import { NumberListComponent } from "./number-list/number-list.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations:[
    NumberItemComponent,
    NumberListComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[
    NumberItemComponent,
    NumberListComponent
  ]
}) export class NumberModule{

}
