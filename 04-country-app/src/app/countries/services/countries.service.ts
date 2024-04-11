import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country, } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiURL: string = 'https://restcountries.com/v3.1';

  public cacheStore:CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  };

  constructor(private httpClient: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(
      catchError((error) => of([])), // Este pipe captura el error si salta y devuelve un Array vacio de Observables
      delay(200)
    );
  }

  searchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {
    const url = `${this.apiURL}/alpha/${alphaCode}`;

    return this.httpClient.get<Country[]>(url).pipe(
      map((countries) => (countries.length > 0 ? countries[0] : null)),
      catchError((error) => of(null))
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${term}`;

    return this.getCountriesRequest(url)
    .pipe(
      tap(countries=>this.cacheStore.byCapital.countries= countries),
      tap(countries => this.cacheStore.byCapital.term = term)
    );

  }

  searchCountry(term: String): Observable<Country[]> {
    const url: string = `${this.apiURL}/name/${term}`;

    return this.getCountriesRequest(url);
  }

  searchRegion(term: string): Observable<Country[]> {
    const url: string = `${this.apiURL}/region/${term}`;

    return this.getCountriesRequest(url);
  }
}
