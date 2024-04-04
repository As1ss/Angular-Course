import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NumberModule } from './components/number/number.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
