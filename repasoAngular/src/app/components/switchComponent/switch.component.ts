import { Component } from "@angular/core";


enum OrderStatus{
  InPreparation,
  Prepared,
  InTransit,
  Delivered,
  Rejected
}



@Component({
  selector:"app-switch",
  templateUrl:"switch.component.html"
}) export class SwitchComponent{

  os = OrderStatus;


  orderStatus:OrderStatus = OrderStatus.Rejected;



}
