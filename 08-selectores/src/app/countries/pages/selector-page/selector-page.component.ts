import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries-service.service';
import { Region, SmallCountry } from '../../interfaces/country.interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``,
})
export class SelectorPageComponent  implements OnInit{




  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    borders: ['', Validators.required],
  });

  private _countries:SmallCountry[]=[];

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {}


  get regions(): Region[] {
    return this.countriesService.regions;
  }

  ngOnInit(): void {
    this.onRegionChanged();
  }


  // onRegionChanged():void {
  //   this.myForm.get('region')!.valueChanges
  //   .subscribe( region => {
  //      this.countriesService.getCountriesByRegion(region)
  //      .subscribe(countries=> this._countries = countries );
  //   });
  // }
  onRegionChanged():void {
    this.myForm.get('region')!.valueChanges
    .pipe(
      switchMap(region=>this.countriesService.getCountriesByRegion(region))
    ).subscribe(countries=> console.log({countries}));
  }

  get countries(){

    return this._countries;
  }







  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched;
      return;
    }
  }
}
