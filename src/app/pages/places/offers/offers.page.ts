import { Component, OnInit } from "@angular/core";
import { OffersService } from "../../../services/offers.service";
import { Offer } from "../../../models/offer.model";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.page.html",
  styleUrls: ["./offers.page.scss"]
})
export class OffersPage implements OnInit {
  offers: Offer[];

  constructor(private offerService: OffersService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.offers = this.offerService.get();
  }
}
