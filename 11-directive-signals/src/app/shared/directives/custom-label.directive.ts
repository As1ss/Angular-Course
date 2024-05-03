import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    // console.log("Constructor de la directiva");
    // this.htmlElement.nativeElement.innerHTML = "Hola mundolf";
    // console.log("Elemento hmtl",el.nativeElement);
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log('Directiva - NgOninit');

    this.setStyle();
  }

  setStyle(): void {
    if (!this.htmlElement) return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;

    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = 'No existen errores';
      return;
    }

    const errors = Object.keys(this._errors);

    if(errors.includes("required")){
      this.htmlElement.nativeElement.innerText = "Este campo es requerido";
      return;
    }
    else if(errors.includes("minlength")){
      this.htmlElement.nativeElement.innerText = "Mínimo de longitud de caracterex kekw";
    }
  }
}
