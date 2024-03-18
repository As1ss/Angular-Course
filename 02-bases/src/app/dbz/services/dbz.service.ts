import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";





@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public receivedCharacter: Character = {
    id: uuid(),
    name: "",
    power: 0
  };

  public characters: Character[] = [{
    id: uuid(),
    name: "Krillin",
    power: 1000
  },
  {
    id: uuid(),
    name: "Goku",
    power: 9500
  },
  {
    id: uuid(),
    name: "Vegeta",
    power: 7500
  }];


  public addCharacter(character: Character): void {
    this.characters.push(character);
  }

  public deleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }

}
