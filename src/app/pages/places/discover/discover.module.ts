import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { DiscoverPage } from "./discover.page";
import { MapComponent } from "../../../components/map/map.component";
import { PickerComponent } from "./../../../components/picker/picker.component";

const routes: Routes = [
  {
    path: "",
    component: DiscoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DiscoverPage, MapComponent, PickerComponent]
})
export class DiscoverPageModule {}
