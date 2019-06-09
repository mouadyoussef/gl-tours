import { Marker } from "./../../models/marker.model";
import { Component, OnInit, Input, Renderer2 } from "@angular/core";
import { Plugins } from "@capacitor/core";
import { LoadingController } from "@ionic/angular";
import { Observable } from "rxjs";

declare var google;

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  public map;
  public isMapIdle: boolean;
  public currentLocation;

  constructor(public loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.map = this.createMap();
    this.addMapEventListeners();
    this.getLocation().subscribe(location => this.map.panTo(location));
  }

  addMapEventListeners() {
    google.maps.event.addListener(this.map, "dragstart", () => {
      this.isMapIdle = false;
    });
    google.maps.event.addListener(this.map, "idle", () => {
      this.isMapIdle = true;
    });
  }

  getLocation() {
    console.log("==========> getLocation()");

    let options = { timeout: 10000, enableHighAccuracy: true };
    let locationObs = new Observable(observable => {
      Plugins.Geolocation.getCurrentPosition(options).then(resp => {
        let lat = resp.coords.latitude;
        let lng = resp.coords.longitude;
        console.log("lat " + lat + " == " + "long " + lng);
        let location = new google.maps.LatLng(lat, lng);
        console.log("current location " + location);
        observable.next(location);
      });
    });
    return locationObs;
  }

  createMap() {
    this.getLocation().subscribe(location => (this.currentLocation = location));
    let mapOptions = {
      center: this.currentLocation,
      zoom: 16,
      MapTypeId: google.maps.MapTypeId.ROADMAP
    };

    let mapEl = document.getElementById("map");
    let map = new google.maps.Map(mapEl, mapOptions);
    return map;
  }

  centerLocation() {
    this.getLocation().subscribe(currentLocation => {
      this.map.setCenter(currentLocation);
    });
  }
}
