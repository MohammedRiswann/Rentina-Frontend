import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import 'leaflet-draw'; // Import the Draw module

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private map!: L.Map;
  private drawnItems = new L.FeatureGroup();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([42.3601, -71.0589], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    this.map.addLayer(this.drawnItems);

    // const drawControl = new L.Control.draw({
    //   draw: {
    //     polygon: true,
    //     polyline: false,
    //     rectangle: false,
    //     circle: false,
    //     marker: false,
    //   },
    //   edit: {
    //     featureGroup: this.drawnItems,
    //   },
    // });

    // this.map.addControl(drawControl);

    // this.map.on(L.Draw.Event.CREATED, (event: any) => {
    //   const layer = event.layer;
    //   this.drawnItems.addLayer(layer);
    //   this.searchArea(layer.toGeoJSON().geometry.coordinates[0]);
    // });
  }

  private searchArea(coordinates: number[][]): void {
    // Send coordinates to backend for search
    this.http
      .post<any>('http://localhost:3000/search', { coordinates })
      .subscribe((data) => {
        // Process search results here
        console.log(data);
      });
  }
}
