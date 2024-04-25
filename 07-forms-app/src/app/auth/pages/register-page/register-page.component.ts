import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',

})
export class RegisterPageComponent {


  public myForm:FormGroup = this.fb.group({
    name: ["",[Validators.required]],
    email: ["",[Validators.required]],
    userName: ["",[Validators.required]],
    password: ["",[Validators.required, Validators.minLength(6)]],
    password2: ["",[Validators.required]]

  })


  constructor(private fb:FormBuilder){}


  isValidField(field:string):void{
    // TODO: obtener validación desde un servicio


  }


  onSave(){

    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }


    console.log(this.myForm.value);
  }
}
