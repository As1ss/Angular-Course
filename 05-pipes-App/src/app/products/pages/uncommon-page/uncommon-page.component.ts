import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select

  public name:string = "Alexis";
  public gender: "male" | "female"| "" = "male";
  public invitationMap = {
    male:"invitarlo",
    female:"invitarla",
    "":"invitarle"
  }



  public changeClient():void{
    this.name="Alexia";
    this.gender="female";
  }

    //i18n Plural
    public clients: string[] = ["Maria","Pedro","Fernando","Hernando","Eduardo","Melissa","Natalia"]
    public clientsMap = {
      "=0": "no tenemos ningún cliente esperando...",
      "=1": "tenemos un cliente esperando...",
      "=2": "tenemos 2 personas esperando.",
      "other": "tenemos # clientes esperando..."
    }

    public deleteClient():void{
      this.clients.shift();
    }


    //Key ValuePipe


    public person = {
      name:"Alexis",
      age:29,
      address: "Asturias, España"
    }



    //Async Pipe
    public myObservableTimer:Observable<number> = interval(2000)
    .pipe(
      tap(value => console.log("tap: ",value))
    )

    public promiseValue: Promise<string> = new Promise(
      (resolve,reject) => {
        setTimeout(()=> {
          resolve("Tenemos data en la promesa.");
        }, 3500);
      }
    )
}
