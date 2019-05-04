import { PlacesService } from "./../../services/places.service";
import { Component, OnInit, OnChanges, Input } from "@angular/core";

@Component({
  selector: "app-picker",
  templateUrl: "./picker.component.html",
  styleUrls: ["./picker.component.scss"]
})
export class PickerComponent implements OnInit, OnChanges {
  @Input() isPinSet: boolean;
  @Input() map;
  @Input() isPickupRequested;

  popup: google.maps.InfoWindow;
  private pickupMarker: google.maps.Marker;

  constructor(private placeService: PlacesService) {}

  ngOnInit() {}

  ngOnChanges(changes) {
    this.showMarkers();
  }

  showMarkers() {
    this.placeService.getPlaces().forEach(place => {
      const pickupMarker = new google.maps.Marker({
        map: this.map,
        position: new google.maps.LatLng(place.marker.lat, place.marker.lng)
      });

      const popup = new google.maps.InfoWindow({
        content: `<h4><a href="/places/tabs/discover/1">${place.name} </h4></a>
                  <p> ${place.description} </p>`
      });

      google.maps.event.addListener(pickupMarker, "click", () => {
        popup.open(this.map, pickupMarker);
        setTimeout(() => popup.close(), 5000);
      });
    });
  }
}
