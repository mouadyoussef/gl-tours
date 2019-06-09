import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Offer } from "../../../../models/offer.model";
import { OffersService } from "../../../../services/offers.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  LoadingController,
  NavController,
  AlertController
} from "@ionic/angular";

@Component({
  selector: "app-edit-offer",
  templateUrl: "./edit-offer.page.html",
  styleUrls: ["./edit-offer.page.scss"]
})
export class EditOfferPage implements OnInit, OnDestroy {
  offer: Offer;
  offerId: string;
  form: FormGroup;
  offerSub: Subscription;
  isLoading: boolean = false;

  constructor(
    private offerService: OffersService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has("offerId")) {
        this.navCtrl.navigateBack("/places/tabs/offers");
        return;
      }
      this.offerId = paramMap.get("offerId");
      this.isLoading = true;
      (this.offerSub = this.offerService
        .getOffer(this.offerId)
        .subscribe(offer => {
          this.offer = offer;
          this.form = new FormGroup({
            title: new FormControl(this.offer.title, {
              updateOn: "blur",
              validators: [Validators.required]
            }),
            description: new FormControl(this.offer.description, {
              updateOn: "blur",
              validators: [Validators.required, Validators.maxLength(180)]
            })
          });
          this.isLoading = false;
        })),
        error => {
          this.alertCtrl
            .create({
              header: "An error occurred!",
              message: "Place could not be fetched. Please try again later.",
              buttons: [
                {
                  text: "Okay",
                  handler: () => {
                    this.router.navigate(["/places/tabs/offers"]);
                  }
                }
              ]
            })
            .then(alertEl => {
              alertEl.present();
            });
        };
    });
  }

  formValidation() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.maxLength(180)]
      })
    });
  }

  onUpdateOffer() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl
      .create({
        message: "Updating place..."
      })
      .then(loadingEl => {
        loadingEl.present();
        this.offerService
          .update(
            new Offer(
              this.offer.id,
              this.form.value.title,
              this.form.value.description
            )
          )
          .subscribe(() => {
            loadingEl.dismiss();
            this.form.reset();
            this.router.navigate(["/places/tabs/offers"]);
          });
      });
  }

  ngOnDestroy() {
    if (this.offerSub) {
      this.offerSub.unsubscribe();
    }
  }
}
