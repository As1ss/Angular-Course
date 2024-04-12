// import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';
import {CardModule} from "primeng/card";
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from  "primeng/panel";





@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule

  ]
})
export class PrimeNgModule { }
