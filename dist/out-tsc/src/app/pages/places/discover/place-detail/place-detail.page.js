import * as tslib_1 from "tslib";
import { PlacesService } from "src/app/services/places.service";
import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
var PlaceDetailPage = /** @class */ (function () {
    function PlaceDetailPage(placesService, route, navCtrl) {
        this.placesService = placesService;
        this.route = route;
        this.navCtrl = navCtrl;
    }
    PlaceDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has("placeId")) {
                _this.navCtrl.navigateBack("/places/tabs/offers");
                return;
            }
            _this.place = _this.placesService.getById(parseInt(paramMap.get("placeId")));
        });
    };
    PlaceDetailPage = tslib_1.__decorate([
        Component({
            selector: "app-place-detail",
            templateUrl: "./place-detail.page.html",
            styleUrls: ["./place-detail.page.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [PlacesService,
            ActivatedRoute,
            NavController])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}());
export { PlaceDetailPage };
//# sourceMappingURL=place-detail.page.js.map