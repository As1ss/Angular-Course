import { Component } from '@angular/core';
import {FormArray,FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: ``,
})
export class DynamicPageComponent {
  // public myForm:FormGroup = new FormGroup({
  //   name: new FormControl(["",Validators.required,Validators.minLength(3)]),
  //   favoriteGames: new FormArray([
        // new FormControl("Metal Gear",Validators.required),
        // new FormControl("Death Stranding",Validators.required)
  //   ])
  // })

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ]),
  });

  public newFavoriteGame:FormControl= new FormControl("",Validators.required);

  constructor(private fb: FormBuilder) {}

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  ifsValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  isValidFieldInArray(formArray:FormArray, index: number) {
    return formArray.controls[index].errors && formArray.controls[index].touched;

  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key in errors) {
      switch (key) {
        case 'required':
          return 'Valor requerido.';
        case 'minlength':
          return `El valor requerido debe tener mínimo ${errors['minlength'].requiredLength} caracteres.`;
      }
    }
    return null;
  }

  onAddToFavorites():void{
    if(this.newFavoriteGame.invalid) return;
    const newGame = this.newFavoriteGame.value;

    this.favoriteGames.push(
      this.fb.control(newGame,Validators.required)
    );

    this.newFavoriteGame.reset();
  }

  onDeleteFavorite(index:number):void{
    this.favoriteGames.removeAt(index)


  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset();
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
  }
}
