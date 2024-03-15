import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[]=["Spiderman","Ironman","Hulk","Thor","DrStrange"];
  public heroDeleted?:string;

  public deleteLastHeroName():void{


    // let listLength= this.heroNames.length-1;
    // if(listLength<0){
    //     alert("Cant delete more Heroes");
    // }
    // else{
    //   alert(`Hero deleted: ${this.heroNames[listLength]}`);
    //   delete this.heroNames[listLength];
    //   this.heroNames.length=listLength;
    //   console.log(this.heroNames.length);
    // }

    //this.heroNames.pop();

     this.heroDeleted = this.heroNames.pop();



  }




}
