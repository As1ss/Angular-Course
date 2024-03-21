import { Component, ElementRef } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.services';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {





  constructor(private gifsService:GifsService){


  }


  public get tagsHistory(){

   return this.gifsService.tagsHistory;

  }

  public reSearch(tag:string){

    this.gifsService.searchTag(tag);

    console.log(tag);
  }

}
