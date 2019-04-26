import { OffersService } from "../../../services/offers.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Offer } from "../../../models/offer.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.page.html",
  styleUrls: ["./offers.page.scss"]
})
export class OffersPage implements OnInit, OnDestroy {
  offers: Offer[];
  offersSub: Subscription;

  constructor(private offerService: OffersService) {}

  ngOnInit() {
    this.offersSub = this.offerService.offers.subscribe(
      offers => (this.offers = offers)
    );
  }

  ionViewWillEnter() {}

  ngOnDestroy(): void {
    if (this.offersSub) this.offersSub.unsubscribe();
  }
}
