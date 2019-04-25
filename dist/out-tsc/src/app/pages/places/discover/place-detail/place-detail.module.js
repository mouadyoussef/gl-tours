import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PlaceDetailPage } from './place-detail.page';
var routes = [
    {
        path: '',
        component: PlaceDetailPage
    }
];
var PlaceDetailPageModule = /** @class */ (function () {
    function PlaceDetailPageModule() {
    }
    PlaceDetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PlaceDetailPage]
        })
    ], PlaceDetailPageModule);
    return PlaceDetailPageModule;
}());
export { PlaceDetailPageModule };
//# sourceMappingURL=place-detail.module.js.map