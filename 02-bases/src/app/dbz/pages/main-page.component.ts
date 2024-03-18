import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";




@Component({
  selector: "dbz-main-page",
  templateUrl: "./main-page.component.html"
})
export class MainPageComponent {

  public receivedCharacter:Character={
    name:"",
    power:0
  };

  public characters: Character[] = [{
    name: "Krillin",
    power: 1000
  },
  {
    name: "Goku",
    power: 9500
  },
{
  name: "Vegeta",
  power: 7500
}];


public addCharacter(character:Character):void{
    this.characters.push(character);
}

public deleteCharacter(index:number):void{
  this.characters.splice(index,1);
}

}
