import { Injectable } from "@angular/core";
import { Place } from "../models/place.model";

@Injectable({
  providedIn: "root"
})
export class FavoritePlacesService {
  _places: Place[] = [];

  constructor() {}

  addPlace(place: Place) {
    this._places.push(place);
    console.log(this._places);
  }

  get places() {
    return this._places;
  }
}
