import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  private http = inject(HttpClient);
  private baseUrl = "https://reqres.in/api/users";


  getUserById(id:number):Observable<User>{

    return this.http.get<SingleUserResponse>(`${this.baseUrl}/${id}`)
    .pipe(
      map( response => response.data ),
      tap( response => console.log(response) )
    );

  }

}
