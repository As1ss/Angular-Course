import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of } from "rxjs";
import { Country } from "../interfaces/country";



@Injectable({
  providedIn: "root"
}) export class CountriesService {

  apiURL: string = "https://restcountries.com/v3.1";

  constructor(private httpClient: HttpClient) { }



  searchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {

    const url = `${this.apiURL}/alpha/${alphaCode}`

    return this.httpClient.get<Country[]>(url)
      .pipe(map(countries => countries.length>0 ? countries[0] : null),
        catchError(error => of(null)));
  }


  searchCapital(term: string): Observable<Country[]> {

    const url = `${this.apiURL}/capital/${term}`;

    return this.httpClient.get<Country[]>(url)
      .pipe(catchError(error => of([]))); // Este pipe captura el error si salta y devuelve un Array vacio de Observables
  }

  searchCountry(term: String): Observable<Country[]> {
    const url: string = `${this.apiURL}/name/${term}`;

    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(erro => of([]))
      );
  }

  searchRegion(term: string): Observable<Country[]> {

    const url: string = `${this.apiURL}/region/${term}`;

    return this.httpClient.get<Country[]>(url)
      .pipe(catchError(error => of([])));
  }

}
