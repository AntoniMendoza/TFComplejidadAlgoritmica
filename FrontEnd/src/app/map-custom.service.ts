import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import {resolve} from "@angular/compiler-cli";

@Injectable({
  providedIn: 'root'
})
export class MapCustomService {
  mapbox=(mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style ='mapbox://styles/mapbox/streets-v11';
  latitud =-34.921543;
  longitud = -57.957004;
  zoom = 3;

  constructor() { }

 /* buildMap(): Promise<any> {
    return new Promise(excutor:(resolve, reject)=>
    {
      this.map=new mapboxgl.Map({
        container:'map',
        style: this.style,
        zoom: this.zoom,
        center:[this.longitud, this.latitud]
      })
      resolve
    });
  }
}

//minuto 32.14
