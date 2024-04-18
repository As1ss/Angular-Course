import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  constructor(
    private authService:AuthService,
    private router:Router
  ){}


  onLogin():void{

    this.authService.login("jola","21321").subscribe(
      user => {
                this.router.navigateByUrl('/');
      }
    )
  }

}
