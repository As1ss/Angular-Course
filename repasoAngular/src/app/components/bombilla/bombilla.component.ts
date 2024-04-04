import { Component } from "@angular/core";


@Component({
  selector:"app-bombilla",
  templateUrl:"bombilla.component.html"
})export class BombillaComponent{

  encenderBombisha:boolean=false;

  constructor(){

  }

  onClickListener():void{
    this.encenderBombisha = !this.encenderBombisha;
  }
}
