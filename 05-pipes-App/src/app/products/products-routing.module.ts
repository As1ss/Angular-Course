import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPagesComponent } from './pages/basics-page/basic-pages.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

const routes: Routes = [{

  path:"",
  component: BasicPagesComponent
},{
  path:"numbers",
  component: NumbersPageComponent
},{
  path:"uncommon",
  component: UncommonPageComponent
},
  {
    path: "**",
    redirectTo:""
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
