import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OfferDetailPage } from './offer-detail.page';
var routes = [
    {
        path: '',
        component: OfferDetailPage
    }
];
var OfferDetailPageModule = /** @class */ (function () {
    function OfferDetailPageModule() {
    }
    OfferDetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [OfferDetailPage]
        })
    ], OfferDetailPageModule);
    return OfferDetailPageModule;
}());
export { OfferDetailPageModule };
//# sourceMappingURL=offer-detail.module.js.map