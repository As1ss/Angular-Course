import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';





@NgModule({
  exports:[
    MenuModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
  ]
})
export class PrimeNgModule { }
