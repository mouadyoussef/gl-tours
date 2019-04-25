import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { OffersService } from "../../../services/offers.service";
var OffersPage = /** @class */ (function () {
    function OffersPage(offerService) {
        this.offerService = offerService;
    }
    OffersPage.prototype.ngOnInit = function () { };
    OffersPage.prototype.ionViewWillEnter = function () {
        this.offers = this.offerService.get();
    };
    OffersPage = tslib_1.__decorate([
        Component({
            selector: "app-offers",
            templateUrl: "./offers.page.html",
            styleUrls: ["./offers.page.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [OffersService])
    ], OffersPage);
    return OffersPage;
}());
export { OffersPage };
//# sourceMappingURL=offers.page.js.map