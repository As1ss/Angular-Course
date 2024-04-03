import { Component } from "@angular/core";


@Component({
  selector: "inventory-second",
  templateUrl: "second.component.html"
}) export class SecondComponent {

  isDisabled: boolean = false;
  maxLength: number = 4;

  counter:number=0;

  increaseCounter():void{
    this.counter++;
  }

}
