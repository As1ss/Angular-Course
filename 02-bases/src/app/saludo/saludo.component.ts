import { Component } from "@angular/core";



@Component({
  template:`

  <h1>SALUDAR COMPONENT</h1>


  <p>Saludo: {{mensaje}}</p>
  <button (click)="saludar()">Saludar</button>

  `,
  selector:"saludo-component"

})
export class SaludoComponent{

  public mensaje:string;

  constructor(){
    this.mensaje="HOLASSS";
  }


  saludar(){
    this.mensaje+= " A TODOOOOS";
  }

}
