import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  constructor(private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      params => this.countriesService.searchCountryByAlphaCode(params['id'])
        .subscribe(country =>{
          if(country){
            console.log("Tenemos un país");
            return;
          }
          else{
            return this.router.navigateByUrl("");
          }
        })
    );
  }
}
