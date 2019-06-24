import { OfferItemComponent } from "./../components/offer-item/offer-item.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [OfferItemComponent],
  imports: [CommonModule, IonicModule],
  exports: [OfferItemComponent]
})
export class SharedModule {}
