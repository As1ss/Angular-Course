import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";
import { HoverBackgroundDirective } from "./directives/hover-background.directive";







@NgModule({
  declarations:[
    HeroComponent,
    ListComponent,
    HoverBackgroundDirective
  ],
  exports:[
    HeroComponent,
    ListComponent,
    HoverBackgroundDirective
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule{

}
