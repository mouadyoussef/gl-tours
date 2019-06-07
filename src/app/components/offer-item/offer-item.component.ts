import { Component, OnInit, Input } from "@angular/core";
import { Offer } from "../../models/offer.model";
import {
  IonItemSliding,
  LoadingController,
  AlertController,
  ActionSheetController
} from "@ionic/angular";
import { Router } from "@angular/router";
import { OffersService } from "src/app/services/offers.service";

@Component({
  selector: "app-offer-item",
  templateUrl: "./offer-item.component.html",
  styleUrls: ["./offer-item.component.scss"]
})
export class OfferItemComponent implements OnInit {
  @Input() offerItem: Offer;
  constructor(
    private router: Router,
    private offerServices: OffersService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() { }

  onDeleteOffer(id, slidingItem: IonItemSliding) {
    slidingItem.close();

    this.actionSheetCtrl
      .create({
        header: "Delete",
        buttons: [
          {
            text: "Yes",
            handler: () => {
              this.loadingCtrl
                .create({ message: "Deleting ..." })
                .then(loadingEl => {
                  loadingEl.present();
                  this.offerServices.delete(id).subscribe(() => {
                    loadingEl.dismiss();
                  });
                });
            }
          },
          {
            text: "Cancel",
            role: "cancel"
          }
        ]
      })
      .then(actionSheetEl => {
        actionSheetEl.present();
      });
  }

  showAlert(message: string) {
    this.alertCtrl
      .create({
        header: "Offers ... ",
        message,
        buttons: ["Okey"]
      })
      .then(el => el.present());
  }
}
