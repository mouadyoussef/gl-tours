import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Place } from "./../models/place.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class PlacesService {
  /*
  private _places: Place[] = [
    new Place(1, "AlQuaraouiyin", "description Place 1", "Place1.jpg", {
      lat: 34.0339443,
      lng: -5.0054103
    }),
    new Place(2, "Boujloud", "description Place 2", "Place2.jpg", {
      lat: 34.037142,
      lng: -4.9964356
    }),
    new Place(3, "Bouininia", "description Place 3", "Place3.jpg", {
      lat: 34.0624632,
      lng: -4.9848559
    }),
    new Place(4, "bab mahrouk", "description Place 2", "Place2.jpg", {
      lat: 34.0623302,
      lng: -4.987809
    }),
    new Place(5, "Al attarine medersa", "description Place 5", "Place5.jpg", {
      lat: 34.0650788,
      lng: -4.9759275
    }),
    new Place(6, "Charatine medersa", "description Place 6", "Place6.jpg", {
      lat: 34.037142,
      lng: -4.9964356
    }),
    new Place(7, "Bab rsif", "description Place 7", "Place7.jpg", {
      lat: 34.0618965,
      lng: -4.9752053
    })
  ];
  */
  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(environment.apiUrl + "places");
  }

  getById(id: string): Observable<Place> {
    return this.http.get<Place>(`${environment.apiUrl}places/${id}`);
  }
}
