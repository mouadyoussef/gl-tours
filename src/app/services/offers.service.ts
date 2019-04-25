import { Injectable } from "@angular/core";
import { Offer } from "../models/offer.model";

@Injectable({
  providedIn: "root"
})
export class OffersService {
  private _offers: Offer[] = [
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
  ];
  constructor() {}

  get(): Offer[] {
    return [...this._offers];
  }

  getById(id: number): Offer {
    return { ...this._offers.find(o => o.id === id) };
  }

  delete(id: number) {
    this._offers = this._offers.filter(o => o.id !== id);
  }

  add(offer: Offer) {
    this._offers.push(offer);
  }

  update(offer: Offer) {
    this.delete(offer.id);
    this.add(offer);
  }
}
