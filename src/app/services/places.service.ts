import { Place } from "./../models/place.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private _places: Place[] = [
    new Place(1, "Place 1", "description Place 1", "Place1.jpg"),
    new Place(2, "Place 2", "description Place 2", "Place2.jpg"),
    new Place(3, "Place 3", "description Place 3", "Place3.jpg")
  ];
  constructor() {}

  get(): Place[] {
    return [...this._places];
  }

  getById(id: number): Place {
    return { ...this._places.find(p => p.id === id) };
  }
}
