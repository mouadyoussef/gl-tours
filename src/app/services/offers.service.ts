import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Offer } from "../models/offer.model";
import { BehaviorSubject, Observable, of } from "rxjs";
import { take, map, tap, delay, switchMap } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class OffersService {
  private _offers = new BehaviorSubject<Offer[]>(null);

  constructor(private http: HttpClient) {}

  get offers() {
    return this._offers.asObservable();
  }

  getOffer(id: string) {
    return this.http.get<Offer>(`${environment.apiUrl}ads/${id}`).pipe(
      map(offerData => {
        return new Offer(
          id,
          offerData.title,
          offerData.description,
          offerData.picture,
          offerData.date,
          offerData.place_id
        );
      })
    );
  }

  add(newOffer: Offer) {
    console.log("offer ...", newOffer);

    let generatedId: number;
    return this.http.post<{ id: number }>(`${environment.apiUrl}ads`, {
      ...newOffer,
      id: null
    });
  }

  fetchOffers() {
    return this.http
      .get<{ [key: number]: Offer }>(`${environment.apiUrl}ads`)
      .pipe(
        map(offerData => {
          console.log(offerData);

          const offers = [];
          for (const key in offerData) {
            if (offerData.hasOwnProperty(key)) {
              offers.push(
                new Offer(
                  offerData[key].id,
                  offerData[key].title,
                  offerData[key].description,
                  offerData[key].picture,
                  offerData[key].date,
                  offerData[key].place_id
                )
              );
            }
          }
          return offers;
        }),
        tap(offers => {
          this._offers.next(offers);
        })
      );
  }

  uploadImage(image: File) {
    const uploadData = new FormData();
    uploadData.append("image", image);
    return this.http.post<{ imageUrl: string; imagePath: string }>(
      "",
      uploadData
    );
  }

  update(newOffer: Offer) {
    let updatedOffers: Offer[];
    return this.offers.pipe(
      take(1),
      switchMap(offers => {
        if (!offers || offers.length <= 0) {
          return this.fetchOffers();
        } else {
          return of(offers);
        }
      }),
      switchMap(offers => {
        const updatedOfferIndex = offers.findIndex(o => o.id === newOffer.id);
        updatedOffers = [...offers];
        const oldPlace = updatedOffers[updatedOfferIndex];
        updatedOffers[updatedOfferIndex] = new Offer(
          oldPlace.id,
          newOffer.title,
          newOffer.description
        );
        return this.http.put(`${environment.apiUrl}ads/${newOffer.id}`, {
          ...updatedOffers[updatedOfferIndex],
          id: null
        });
      }),
      tap(() => {
        this._offers.next(updatedOffers);
      })
    );
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}ads/${id}`).pipe(
      switchMap(() => {
        return this.offers;
      }),
      take(1),
      tap(offers => {
        this._offers.next(offers.filter(b => b.id !== id));
      })
    );
  }
}
