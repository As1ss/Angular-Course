import { Component, Input, OnInit } from "@angular/core";
import { Item } from "./article.component";


@Component({
  selector:"article-item",
  templateUrl: "article-item.component.html"
}) export class ArticleItemComponent implements OnInit{

  constructor(){}

  @Input()
  item!:Item;

  ngOnInit(): void {
    console.log("Item Created");
    if(!this.item) throw new Error("No item provided.");
  }



}
