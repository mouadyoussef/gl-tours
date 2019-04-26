import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Offer } from "../../../../models/offer.model";
import { OffersService } from "../../../../services/offers.service";

@Component({
  selector: "app-new-offer",
  templateUrl: "./new-offer.page.html",
  styleUrls: ["./new-offer.page.scss"]
})
export class NewOfferPage implements OnInit {
  form: FormGroup;

  constructor(private offerServices: OffersService, private router: Router) {}

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

    const name = this.form.value.name;
    const description = this.form.value.description;
    const minAge = parseInt(this.form.value.minAge);
    const maxAge = parseInt(this.form.value.maxAge);
    const from = new Date(this.form.value.dateFrom);
    const to = new Date(this.form.value.dateTo);
    const sexe = this.form.value.sexe;
    const range = this.form.value.range;
    const offer = new Offer(
      4,
      name,
      description,
      null,
      null,
      minAge,
      maxAge,
      from,
      to,
      sexe,
      range
    );
    this.offerServices.add(offer);
    this.form.reset();
    this.router.navigate(["/places/tabs/offers", offer.id]);
  }

  dateValidation() {
    const from = new Date(this.form.value.dateFrom);
    const to = new Date(this.form.value.dateTo);
    return to > from;
  }
}
