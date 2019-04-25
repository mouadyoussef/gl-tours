import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { Offer } from "../models/offer.model";
var OffersService = /** @class */ (function () {
    function OffersService() {
        this.offers = [
            new Offer(1, "offer 1", "description offer 1", "offer1.jpg", "LC WaiKIKI"),
            new Offer(2, "offer 2", "description offer 2", "offer2.jpg", "KIABI"),
            new Offer(3, "offer 3", "description offer 3", "offer3.jpg", "Nike Fès")
        ];
    }
    OffersService.prototype.get = function () {
        return this.offers.slice();
    };
    OffersService.prototype.getById = function (id) {
        return this.offers.find(function (o) { return o.id === id; });
    };
    OffersService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], OffersService);
    return OffersService;
}());
export { OffersService };
//# sourceMappingURL=offers.service.js.map