import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``,
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?:keyof Hero;




  public heroes: Hero[] = [
    {
      name: 'superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'linterna verde',
      canFly: true,
      color: Color.green,
    },
  ];

  public colorMap = {
    "=0": "rojo",
    "=1": "negro",
    "=2": "azul",
    "=3": "verde",
    "other":"no se sae"
  }


  changeOrder(value: keyof Hero):void{
    this.orderBy=value;
  }

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
