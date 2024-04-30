import { Component } from '@angular/core';


interface MenuItem {
  name: string;
  router: string;
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {


  public menuItems: MenuItem[]= [
    {name: "FullScreen",router: "fullscreen"},
    {name: "ZoomRange",router: "zoom-range"},
    {name: "Markers",router: "markers"},
    {name: "Houses",router: "properties"},
  ]

}
