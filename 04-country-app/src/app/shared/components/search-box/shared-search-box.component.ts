import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";


@Component({
  selector:"shared-search-box",
  templateUrl:"shared-search-box.component.html"
}) export class SearchBoxComponent {




  @Output()
  messageSearched = new EventEmitter<string>();





  @Input()
  placeholder:string="";


  sendMessage(value:string):void{
    this.messageSearched.emit(value);
  }



}
