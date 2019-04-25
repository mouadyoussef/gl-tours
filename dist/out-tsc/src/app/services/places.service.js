import * as tslib_1 from "tslib";
import { Place } from "./../models/place.model";
import { Injectable } from "@angular/core";
var PlacesService = /** @class */ (function () {
    function PlacesService() {
        this.places = [
            new Place(1, "Place 1", "description Place 1", "Place1.jpg"),
            new Place(2, "Place 2", "description Place 2", "Place2.jpg"),
            new Place(3, "Place 3", "description Place 3", "Place3.jpg")
        ];
    }
    PlacesService.prototype.get = function () {
        return this.places.slice();
    };
    PlacesService.prototype.getById = function (id) {
        return this.places.find(function (p) { return p.id === id; });
    };
    PlacesService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PlacesService);
    return PlacesService;
}());
export { PlacesService };
//# sourceMappingURL=places.service.js.map