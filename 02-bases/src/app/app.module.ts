import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { SaludoComponent } from './saludo/saludo.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { HoverBackgroundDirective } from './directives/hover-background.directive';



@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    SaludoComponent,
    HeroComponent,
    ListComponent,
    HoverBackgroundDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
