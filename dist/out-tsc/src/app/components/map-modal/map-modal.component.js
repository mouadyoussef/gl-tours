import * as tslib_1 from "tslib";
import { Component, Renderer2, ElementRef, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
var MapModalComponent = /** @class */ (function () {
    function MapModalComponent(modalCtrl, renderer) {
        this.modalCtrl = modalCtrl;
        this.renderer = renderer;
    }
    MapModalComponent.prototype.ngOnInit = function () { };
    MapModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.getGoogleMaps()
            .then(function (googleMaps) {
            var mapEl = _this.mapElementRef.nativeElement;
            var map = new googleMaps.Map(mapEl, {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 15
            });
            googleMaps.event.addListenerOnce(map, "idle", function () {
                _this.renderer.addClass(mapEl, "visible");
            });
            map.addListener("click", function (event) {
                var selectedCoords = {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng()
                };
                _this.modalCtrl.dismiss(selectedCoords);
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MapModalComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss();
    };
    MapModalComponent.prototype.getGoogleMaps = function () {
        var win = window;
        var googleModule = win.google;
        if (googleModule && googleModule.maps) {
            return Promise.resolve(googleModule.maps);
        }
        return new Promise(function (resolve, reject) {
            var script = document.createElement("script");
            script.src =
                "https://maps.googleapis.com/maps/api/js?key=AIzaSyAINNWqeNjEwF59ZBuGFCnVwz26JHcCNCQ";
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
            script.onload = function () {
                var loadedGoogleModule = win.google;
                if (loadedGoogleModule && loadedGoogleModule.maps) {
                    resolve(loadedGoogleModule.maps);
                }
                else {
                    reject("Google maps SDK not available.");
                }
            };
        });
    };
    tslib_1.__decorate([
        ViewChild("map"),
        tslib_1.__metadata("design:type", ElementRef)
    ], MapModalComponent.prototype, "mapElementRef", void 0);
    MapModalComponent = tslib_1.__decorate([
        Component({
            selector: "app-map-modal",
            templateUrl: "./map-modal.component.html",
            styleUrls: ["./map-modal.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController,
            Renderer2])
    ], MapModalComponent);
    return MapModalComponent;
}());
export { MapModalComponent };
//# sourceMappingURL=map-modal.component.js.map