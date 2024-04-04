import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { InventoryModule } from './components/inventory/inventory.module';
import { ShoppingCartModule } from './components/shopping-cart/shopping-cart.module';
import { BombillaComponent } from './components/bombilla/bombilla.component';
import { ProductModule } from './components/product/product.module';
import { TestIndexComponent } from './components/testIndexFor/test-index-for.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleItemComponent } from './components/article/article-item.component';
import { SwitchComponent } from './components/switchComponent/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    BombillaComponent,
    TestIndexComponent,
    ArticleComponent,
    ArticleItemComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InventoryModule,
    ShoppingCartModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
