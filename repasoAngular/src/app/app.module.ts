import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { InventoryModule } from './components/inventory/inventory.module';
import { ShoppingCartModule } from './components/shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InventoryModule,
    ShoppingCartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
