import { Injectable } from "@angular/core";
import { Offer } from "../models/offer.model";
import { BehaviorSubject, Observable } from "rxjs";
import { take, map, tap, delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class OffersService {
  private _offers = new BehaviorSubject<Offer[]>([
    new Offer(
      1,
      "offer 1",
      "description offer 1",
      "offer1.jpg",
      "LC WaiKIKI",
      20,
      24,
      new Date("2019-05-25"),
      new Date("2019-07-01"),
      "male",
      5
    ),
    new Offer(
      2,
      "offer 2",
      "description offer 2",
      "offer2.jpg",
      "KIABI",
      20,
      30,
      new Date("2019-05-25"),
      new Date("2019-09-20"),
      "male",
      10
    ),
    new Offer(
      3,
      "offer 3",
      "description offer 3",
      "offer3.jpg",
      "Nike Fès",
      30,
      40,
      new Date("2019-05-25"),
      new Date("2020-01-01"),
      "female",
      15
    )
  ]);
  constructor() {}

  get offers() {
    return this._offers.asObservable();
  }

  getById(id: number) {
    return this.offers.pipe(
      take(1),
      map(offers => {
        return { ...offers.find(o => o.id === id) };
      })
    );
  }

  delete(id: number) {
    return this.offers.pipe(
      take(1),
      map(offers => {
        return { ...offers.filter(o => o.id !== id) };
      })
    );
  }

  add(offer: Offer) {
    return this.offers.pipe(
      take(1),
      delay(1000),
      tap(offers => {
        this._offers.next(offers.concat(offer));
      })
    );
  }

  update(newOffer: Offer) {
    return this.offers.pipe(
      take(1),
      delay(1000),
      tap(offers => {
        const updatedOfferIndex = offers.findIndex(o => o.id === newOffer.id);
        const updatedOffers = [...offers];
        const oldOffer = updatedOffers[updatedOfferIndex];
        updatedOffers[updatedOfferIndex] = newOffer;
        this._offers.next(updatedOffers);
      })
    );
  }
}
