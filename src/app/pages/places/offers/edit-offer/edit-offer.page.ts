import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Offer } from "../../../../models/offer.model";
import { OffersService } from "../../../../services/offers.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-edit-offer",
  templateUrl: "./edit-offer.page.html",
  styleUrls: ["./edit-offer.page.scss"]
})
export class EditOfferPage implements OnInit, OnDestroy {
  offer: Offer;
  form: FormGroup;
  offerSub: Subscription;

  constructor(
    private offerService: OffersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("offerId")) {
        this.router.navigate(["/places/tabs/offers"]);
        return;
      }
      this.offerSub = this.offerService
        .getById(parseInt(paramMap.get("offerId")))
        .subscribe(offer => (this.offer = offer));
    });

    this.formValidation();
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

  updateOffer() {
    if (!(this.form.valid && this.dateValidation())) {
      return;
    }
    console.log(this.form);
    this.offer.name = this.form.value.name;
    this.offer.description = this.form.value.description;
    this.offer.minAge = parseInt(this.form.value.minAge);
    this.offer.maxAge = parseInt(this.form.value.maxAge);
    this.offer.availableFrom = new Date(this.form.value.dateFrom);
    this.offer.availableTo = new Date(this.form.value.dateTo);
    this.offer.sexe = this.form.value.sexe;
    this.offerService.update(this.offer);
    this.form.reset();
    this.router.navigate(["/places/tabs/offers", this.offer.id]);
  }

  onCancel() {
    this.router.navigate(["/places/tabs/offers", this.offer.id]);
  }

  dateValidation() {
    const from = new Date(this.form.value.dateFrom);
    const to = new Date(this.form.value.dateTo);
    return to > from;
  }

  ngOnDestroy(): void {
    if (this.offerSub) this.offerSub.unsubscribe();
  }
}
