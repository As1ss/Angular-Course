import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { DbzService } from "../services/dbz.service";




@Component({
  selector: "dbz-main-page",
  templateUrl: "./main-page.component.html"
})
export class MainPageComponent {

  constructor(private dbzService:DbzService){

  }

  public get characters():Character[]{

    return this.dbzService.characters;
  }

  public onNewCharacter(character:Character):void{

    this.dbzService.characters.push(character);
  }

  public onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterbyId(id);
  }


}
