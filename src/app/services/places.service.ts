import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Place } from "./../models/place.model";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { environment } from "../../environments/environment";
import { map, tap } from "rxjs/operators";
import { Plugins } from "@capacitor/core";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>(null);
  private lat: number = 34.0334371;
  private lng: number = -4.9768663;

  constructor(private http: HttpClient) {}

  get offers() {
    return this._places.asObservable();
  }

  getPlace(id: string) {
    return this.http.get<Place>(`${environment.apiUrl}places/${id}`).pipe(
      map(data => {
        return new Place(
          id,
          data.name,
          data.description,
          data.picture,
          data.location,
          data.ads
        );
      })
    );
  }

  fetchPlaces(
    lat: number = 34.0334371,
    lng: number = -4.9768663,
    r: number = 4000
  ) {
    return this.http
      .get<{ [key: number]: Place }>(
        `${environment.apiUrl}places/${lat}/${lng}/${r}`
      )
      .pipe(
        map(data => {
          if (data != undefined) {
            console.log("ddddddddd", data["places"]);
            const places = data["places"];
            /*
            for (const key in data) {
              if (data.hasOwnProperty(key)) {
                places.push(
                  new Place(
                    data[key].id,
                    data[key].name,
                    data[key].description,
                    data[key].picture,
                    data[key].location,
                    data[key].ads
                  )
                );
              }
            }
            */
            return places;
          }
        }),
        tap(places => {
          this._places.next(places);
        })
      );
  }
}
