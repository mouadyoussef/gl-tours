import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
var AuthService = /** @class */ (function () {
    function AuthService() {
        this._userIsAuthenticated = false;
    }
    Object.defineProperty(AuthService.prototype, "userIsAuthenticated", {
        get: function () {
            return this._userIsAuthenticated;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function () {
        this._userIsAuthenticated = true;
    };
    AuthService.prototype.logout = function () {
        this._userIsAuthenticated = false;
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map