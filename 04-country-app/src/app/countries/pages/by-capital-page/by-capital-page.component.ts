import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {


  constructor(private countryService:CountriesService){}


  searchByCapitalPage(term:string):void {
    console.log("Enviado desde Capital Page");
    console.log({term});
  }


}
