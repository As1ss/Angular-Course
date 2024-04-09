import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "../interfaces/country";



@Injectable({
  providedIn:"root"
})export class CountriesService{

  apiURL:string = "https://restcountries.com/3.1";

  constructor(private httpClient:HttpClient){}

  searchCapital(term:string): Observable<Country[]>{
    const url= `${this.apiURL}/capital/${term}`;
    return this.httpClient.get<Country[]>(url);
  }
}
