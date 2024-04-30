import { AfterViewInit, Component } from '@angular/core';

import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"



@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css',
})
export class FullScreenPageComponent implements AfterViewInit {


  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      accessToken:"pk.eyJ1IjoiYXMxc3MiLCJhIjoiY2x2bTU0bzFuMDMxZTJxczM2bXhjd2dzMSJ9.xYq12_fIHO6NrKAl8VLZ5g",
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
