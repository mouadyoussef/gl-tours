import { Component, OnInit, Input } from "@angular/core";
import { Offer } from "../../models/offer.model";
import { IonItemSliding } from "@ionic/angular";
import { Router } from "@angular/router";
import { OffersService } from "src/app/services/offers.service";

@Component({
  selector: "app-offer-item",
  templateUrl: "./offer-item.component.html",
  styleUrls: ["./offer-item.component.scss"]
})
export class OfferItemComponent implements OnInit {
  @Input() offerItem: Offer;
  constructor(private router: Router, private offerServices: OffersService) {}

  ngOnInit() {}

  onEditOffer(id, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(["/places/tabs/offers/edit", id]);
    console.log("offer's id", id);
  }

  onDeleteOffer(id, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.offerServices.delete(parseInt(id));
    this.router.navigate(["/places/tabs/offers"]);
  }
}
