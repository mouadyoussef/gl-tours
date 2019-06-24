import { PlacesService } from "./../../services/places.service";
import { Component, OnInit, OnChanges, Input } from "@angular/core";
import { Place } from "../../models/place.model";
import { GeolocationPlugin, Plugins } from "@capacitor/core";

declare var google;

@Component({
  selector: "app-picker",
  templateUrl: "./picker.component.html",
  styleUrls: ["./picker.component.scss"]
})
export class PickerComponent implements OnInit, OnChanges {
  @Input() map;
  @Input() type;
  places: Place[];
  lat: number;
  lng: number;

  constructor(private placeService: PlacesService) {}

  ngOnInit() {}

  ngOnChanges(changes) {
    this.showMarkers();
    setInterval(() => {
      this.showMarkers();
    }, 10000);
  }

  showMarkers() {
    let options = { timeout: 10000, enableHighAccuracy: true };
    Plugins.Geolocation.getCurrentPosition(options).then(resp => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.showPlaces();
    });
  }

  showPlaces() {
    this.placeService.fetchPlaces(/*this.lat, this.lng*/).subscribe(places => {
      if (places != undefined && places.length > 0) {
        console.log("ppppppppp", places);
        places.forEach(place => {
          const data = place.ads;
          if (data != null && data != undefined && data.length > 0) {
            this.showOffers(data, place);
          }

          const pickupMarker = new google.maps.Marker({
            map: this.map,
            position: new google.maps.LatLng(
              place.location.latitude,
              place.location.longitude
            )
          });
          const popup = new google.maps.InfoWindow({
            content: `<div>
                          <div><h3><a href="/places/tabs/discover/${
                            place.id
                          }">${place.name}</a></h3></div><div>
                        <ion-img src="${place.picture}"></ion-img></div>
                      </div>`
          });
          google.maps.event.addListener(pickupMarker, "click", () => {
            popup.open(this.map, pickupMarker);
            setTimeout(() => popup.close(), 5000);
          });
        });
      }
    });
  }
  showOffers(data: any, place: Place) {
    var i = 0;
    let size = 0;
    if (size != data.lenth) {
      size = data.length;
      data.forEach(a => {
        console.log("aaaaaaaaaaaaa", a);

        i++;
        console.log("longitude : ", place.location.longitude);
        const pickupMarker = new google.maps.Marker({
          map: this.map,
          position: new google.maps.LatLng(
            place.location.latitude + i * 0.00001,
            place.location.longitude
          )
        });
        const popup = new google.maps.InfoWindow({
          content: `<div>
                    <div><h3><a href="/places/tabs/offers/${a._id}">${
            a.title
          }</a></h3>
          <h2>Before : ${new Date(a.date).toLocaleDateString()}</h2></div><div>
                  <ion-img src="http://localhost:8000/storage/${
                    a.picture
                  }"></ion-img></div>
                </div>`
        });
        google.maps.event.addListener(pickupMarker, "click", () => {
          popup.open(this.map, pickupMarker);
          setTimeout(() => popup.close(), 5000);
        });
      });
    }
  }
}
