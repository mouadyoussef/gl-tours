import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NewOfferPage } from './new-offer.page';
var routes = [
    {
        path: '',
        component: NewOfferPage
    }
];
var NewOfferPageModule = /** @class */ (function () {
    function NewOfferPageModule() {
    }
    NewOfferPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [NewOfferPage]
        })
    ], NewOfferPageModule);
    return NewOfferPageModule;
}());
export { NewOfferPageModule };
//# sourceMappingURL=new-offer.module.js.map