import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { enviroments } from '../../../enviroments/enviroments';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';






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
    tap(user=>localStorage.setItem("token",user.id.toString()))
   )

  }

}
