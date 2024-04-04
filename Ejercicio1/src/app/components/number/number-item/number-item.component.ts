import { Component, Input, OnInit } from "@angular/core";


@Component({
  selector:"number-item",
  templateUrl:"number-item.component.html"
}) export class NumberItemComponent implements OnInit{


  @Input()
  num!:number;




  esPositivo(num:number):boolean{

    return num>0;
  }
  esNegativo(num:number):boolean{
    return num<0;
  }



  ngOnInit(): void {
    if(!this.num) throw new Error("Num is a property required.");
  }



}
