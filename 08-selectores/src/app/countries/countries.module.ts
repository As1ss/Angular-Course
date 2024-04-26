import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { CountriesRoutingModule } from './countries-routing.module';



@NgModule({
  declarations: [
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ],
  exports: [

  ],
})
export class  CountriesModule {

}
