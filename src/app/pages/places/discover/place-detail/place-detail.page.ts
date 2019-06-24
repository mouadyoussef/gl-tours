import { FavoritePlacesService } from "./../../../../services/favorite-places.service";
import { PlacesService } from "src/app/services/places.service";
import { Component, OnInit } from "@angular/core";
import { Place } from "../../../../models/place.model";
import { Route } from "@angular/compiler/src/core";
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { Offer } from "src/app/models/offer.model";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"]
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  offers: Offer[];

  constructor(
    private placesService: PlacesService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private favPlaceService: FavoritePlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has("placeId")) {
        this.navCtrl.navigateBack("/places/tabs/discover");
        return;
      }
      this.placesService.getPlace(paramMap.get("placeId")).subscribe(place => {
        this.place = place;
        this.offers = place.ads;
        console.log(this.offers);

      });
    });
  }

  onFavorite() {
    console.log(this.place.id);
    this.favPlaceService.addPlace(this.place);
  }
}
