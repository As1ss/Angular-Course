import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  private name: string = "ironman";
  private age: number = 45;



  public get getCapitalizedName(): string {
    return this.name.toUpperCase();
  }

  public get getName(): string {
    return this.name;
  }
  public get getAge(): number {
    return this.age;
  }

  public getHeroDescription():string{
    return `Nombre: ${this.name} - Edad: ${this.age}`;
  }

  public changeHeroName():void{
    this.name="spiderman";
  }

  public changeHeroAge():void{
    this.age=25;
  }

  public resetForm():void{
    this.name="ironman";
    this.age=45;
  }


}
