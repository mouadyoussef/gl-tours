import { PlacesService } from "./../../services/places.service";
import { Component, OnInit, OnChanges, Input } from "@angular/core";
import { Place } from "../../models/place.model";

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

  constructor(private placeService: PlacesService) { }

  ngOnInit() { }

  ngOnChanges(changes) {
    this.showMarkers();
  }

  showMarkers() {
    this.placeService.getPlaces().subscribe(places => {
      console.log(places);
      places.forEach(place => {
        const pickupMarker = new google.maps.Marker({
          map: this.map,
          position: new google.maps.LatLng(place.location.latitude, place.location.longitude)
        });

        const popup = new google.maps.InfoWindow({
          content: `<div>
                        <div><h3><a href="/places/tabs/discover/${place.id}">${
            place.name
            }</a></h3></div><div>
                      <ion-img src="${place.picture}"></ion-img></div>
                    </div>`
        });

        google.maps.event.addListener(pickupMarker, "click", () => {
          popup.open(this.map, pickupMarker);
          //setTimeout(() => popup.close(), 5000);
        });
      });
    });
  }
}
