import { Component, OnInit } from "@angular/core";



export interface Item{
  id:number;
  name:string
}

@Component({
  selector:"app-article",
  templateUrl:"article.component.html"
}) export class ArticleComponent{




  articles:Item[]=[
    {
      id:1,
      name:"Monitor"
    },
    {
      id:2,
      name:"Teclado"
    },{
      id:3,
      name:"Raton"
    },{
      id:4,
      name:"Auriculares"
    }
  ]





  addNewElement():void{

    const article:Item ={
      id:5,
      name:"Silla Gaming"
    }

    this.articles.unshift(article);


  }
  reverseList():void{

    this.articles.reverse();


  }

  reloadFromSErver():void{
    this.articles  = this.createFakeItemsResponse();

  }

  createFakeItemsResponse():Item[]{
   return  [
      {
        id:1,
        name:"Monitor"
      },
      {
        id:2,
        name:"Teclado"
      },{
        id:3,
        name:"Raton"
      },{
        id:4,
        name:"Auriculares"
      }
    ];

  }
  trackByItemId(index:number,item:Item):number{
   return item.id;
  }
}
