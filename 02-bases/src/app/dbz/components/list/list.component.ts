import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Output()
  public onDeleteCharacter:EventEmitter<number> = new EventEmitter();



  @Input()
  public characterList:Character[]=[{
    name:"Trunks",
    power:10
  }]



  public deleteCharacter(index:number):void{

    this.onDeleteCharacter.emit(index);
  }


}
