import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { OffersService } from "src/app/services/offers.service";
var OfferDetailPage = /** @class */ (function () {
    function OfferDetailPage(route, navCtrl, offerService) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.offerService = offerService;
    }
    OfferDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has("offerId")) {
                _this.navCtrl.navigateBack("/places/tabs/offers");
                return;
            }
            _this.offer = _this.offerService.getById(parseInt(paramMap.get("offerId")));
        });
    };
    OfferDetailPage = tslib_1.__decorate([
        Component({
            selector: "app-offer-detail",
            templateUrl: "./offer-detail.page.html",
            styleUrls: ["./offer-detail.page.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            NavController,
            OffersService])
    ], OfferDetailPage);
    return OfferDetailPage;
}());
export { OfferDetailPage };
//# sourceMappingURL=offer-detail.page.js.map