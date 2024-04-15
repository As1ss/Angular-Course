import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPagesComponent } from './pages/basics-page/basic-pages.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';


@NgModule({
  declarations: [
    BasicPagesComponent,
    NumbersPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
