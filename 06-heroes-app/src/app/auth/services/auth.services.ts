import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { enviroments } from '../../../enviroments/enviroments';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';






@Injectable({
  providedIn:"root"
})export class AuthService{

  private _baseURL = enviroments.baseUrl;
  private _user?:User;

  constructor(private http:HttpClient){}



  get currentUser():User | undefined {
    if(!this._user) return undefined;

    return structuredClone(this._user);
  }


  login(email:string,password:string):Observable<User>{

   return this.http.get<User>(`${this._baseURL}/users/1`)
   .pipe(
    tap(user=> this._user = user),
    tap(user=>localStorage.setItem("token","waekaekwa.21312mA.m765m7"))
   )

  }

  logout(){
    this._user = undefined;
    localStorage.clear();
  }
  checkIsLogged():Observable<boolean>{
    if(!localStorage.getItem("token")) return of(false);

    return of(true);
  }

  checkAuthentication():Observable<boolean> {

    if(!localStorage.getItem("token")) return of(false);

    const token = localStorage.getItem("token");

    return this.http.get<User>(`${ this._baseURL }/users/1`)
    .pipe(
      tap( user => this._user=user ),
      map( user => !!user ),
      catchError( err => of(false) )
    );

  }


}
