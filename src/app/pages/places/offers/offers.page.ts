import { OffersService } from "../../../services/offers.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Offer } from "../../../models/offer.model";
import { Subscription } from "rxjs";
import { LoadingController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.page.html",
  styleUrls: ["./offers.page.scss"]
})
export class OffersPage implements OnInit, OnDestroy {
  offers: Offer[];
  offersSub: Subscription;
  isLoading: boolean = false;
  size: number = 0;

  constructor(
    private offerService: OffersService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.loadingCtrl
      .create({
        keyboardClose: true,
        message: "Loading offers ..."
      })
      .then(elem => {
        elem.present();
        setInterval(() => {
          console.log("tttttttttttttttttt");
          this.offersSub = this.offerService.offers.subscribe(
            offers => {
              this.offers = offers;
              elem.dismiss();
              if (this.size != this.offers.length) {
                this.size = this.offers.length;
                this.showAlert("New offers ...");
              }
            },
            error => {
              let message = "";
              console.log(error);
              for (const key in error.error.errors) {
                message += error.error.errors[key];
                break;
              }
              elem.dismiss();
              this.showAlert(message);
              this.isLoading = false;
            }
          );
        }, 5000);
      });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.offerService.fetchOffers().subscribe(() => {
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    if (this.offersSub) this.offersSub.unsubscribe();
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
