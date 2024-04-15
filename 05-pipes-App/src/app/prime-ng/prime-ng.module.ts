// import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { NgModule } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import {CardModule} from "primeng/card";
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from  "primeng/panel";
import { SplitButtonModule } from 'primeng/splitbutton';





@NgModule({
  exports:[

    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    ToolbarModule,
    SplitButtonModule

  ]
})
export class PrimeNgModule { }
