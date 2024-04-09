import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {



  searchByCapitalPage(term:string):void {
    console.log("Enviado desde Capital Page");
    console.log({term});
  }


}
