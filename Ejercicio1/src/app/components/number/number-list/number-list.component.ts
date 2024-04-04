import { Component } from "@angular/core";


@Component({
  selector:"number-list",
  templateUrl:"number-list.component.html"
}) export class NumberListComponent{


  numbers:number[]=[
    10,30,-40,-1,1000,391,55,0,-10
  ]

}
