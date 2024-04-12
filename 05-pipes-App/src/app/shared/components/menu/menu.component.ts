import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {


  public items:MenuItem[]=[];

  ngOnInit(): void {
    this.items = [
      {label:"New", icon: "pi pi-fw pi-plus"},
      {label:"Open", icon: "pi pi-fw pi-download"},
      {label:"Undo", icon: "pi pi-fw pi-refresh"},

    ]
  }


}
