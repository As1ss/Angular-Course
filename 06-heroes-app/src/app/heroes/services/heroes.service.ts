import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { enviroments } from '../../../enviroments/enviroments';



@Injectable({ providedIn: 'root' })

export class HeroesService {

  constructor(private httpClient: HttpClient) {}

  private baseUrl: string = enviroments.baseUrl;

  getHeroes(): Observable<Hero[]> {

    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);

  }
}
