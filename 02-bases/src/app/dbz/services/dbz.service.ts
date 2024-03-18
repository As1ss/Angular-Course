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

    //Creamos una constante para que cuando se cree un character
    //se le asigne un uuid automáticamente
    const newCharacter:Character = {id:uuid(),...character}; // ... sirve para decir que vienen mas argumentos en ese ojbeto
    console.log({newCharacter});
    this.characters.push(newCharacter);
  }

  public deleteCharacterbyId(id:string): void {

    const index = this.characters.findIndex(character=>character.id===id);

    this.characters.splice(index, 1);
  }

}
