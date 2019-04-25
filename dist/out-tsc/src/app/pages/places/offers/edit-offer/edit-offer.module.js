import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EditOfferPage } from './edit-offer.page';
var routes = [
    {
        path: '',
        component: EditOfferPage
    }
];
var EditOfferPageModule = /** @class */ (function () {
    function EditOfferPageModule() {
    }
    EditOfferPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EditOfferPage]
        })
    ], EditOfferPageModule);
    return EditOfferPageModule;
}());
export { EditOfferPageModule };
//# sourceMappingURL=edit-offer.module.js.map