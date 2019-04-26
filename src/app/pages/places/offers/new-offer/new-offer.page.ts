import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Offer } from "../../../../models/offer.model";
import { OffersService } from "../../../../services/offers.service";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-new-offer",
  templateUrl: "./new-offer.page.html",
  styleUrls: ["./new-offer.page.scss"]
})
export class NewOfferPage implements OnInit {
  form: FormGroup;

  constructor(
    private offerServices: OffersService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      dateFrom: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      dateTo: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      minAge: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      maxAge: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      range: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required]
      }),
      sexe: new FormControl(null, {
        updateOn: "blur"
      })
    });
  }

  sendNewOffer() {
    if (!(this.form.valid && this.dateValidation())) {
      return;
    }
    const offer = new Offer(
      4,
      this.form.value.name,
      this.form.value.description,
      null,
      null,
      parseInt(this.form.value.minAge),
      parseInt(this.form.value.maxAge),
      new Date(this.form.value.dateFrom),
      new Date(this.form.value.dateTo),
      this.form.value.sexe,
      this.form.value.range
    );

    this.loadingCtrl
      .create({
        message: "Creating offer..."
      })
      .then(loadingEl => {
        loadingEl.present();
        this.offerServices.add(offer).subscribe(() => {
          loadingEl.dismiss();
          this.form.reset();
          this.router.navigate(["/places/tabs/offers", offer.id]);
        });
      });
  }

  dateValidation() {
    const from = new Date(this.form.value.dateFrom);
    const to = new Date(this.form.value.dateTo);
    return to > from;
  }
}
