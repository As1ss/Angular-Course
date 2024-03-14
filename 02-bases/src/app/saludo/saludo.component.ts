import { Component } from "@angular/core";



@Component({
  template:`

  <h3>SALUDAR COMPONENT</h3>


  <p>Saludo: {{mensaje}}</p>
  <button (click)="saludar()">Saludar</button>

  `,
  selector:"app-saludo"

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
