import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PlacesPage } from "./places.page";
import { PlacesRoutingModule } from "./places-routing.module";
var PlacesPageModule = /** @class */ (function () {
    function PlacesPageModule() {
    }
    PlacesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule, FormsModule, IonicModule, PlacesRoutingModule],
            declarations: [PlacesPage]
        })
    ], PlacesPageModule);
    return PlacesPageModule;
}());
export { PlacesPageModule };
//# sourceMappingURL=places.module.js.map