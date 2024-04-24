import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


const rtx5090= {
  name: "RTX 5090",
  price: 2500,
  inStorage: 6
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})


export class BasicPageComponent implements OnInit{

  // public myForm:FormGroup = this.fb.group({
  //   name:"",
  //   price:0,
  //   inStorage:0
  // })

  public myForm: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(3)]),
    price: new FormControl(0,[Validators.required,Validators.min(0)]),
    inStorage: new FormControl(0,[Validators.required,Validators.min(0)]),
  });

  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
  //  this.myForm.reset(rtx5090)
  }

  ifsValidField(field:string):boolean | null{

    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;

  }

  getFieldError(field:string):string | null{

    if(!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};



    for (const key in errors) {
       switch(key){
        case "required":
          return 'Valor requerido.';
        case "minlength":
          return `El valor requerido debe tener mínimo ${ errors['minlength'].requiredLength } caracteres.`;
       }
    }
    return null;
  }

  onSave():void{

    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({
      price: 0 , inStorage: 0
    });
  }

}
