import * as tslib_1 from "tslib";
import { AuthService } from "./../../services/auth.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var AuthPage = /** @class */ (function () {
    function AuthPage(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthPage.prototype.ngOnInit = function () { };
    AuthPage.prototype.onLogin = function () {
        this.authService.login();
        this.router.navigateByUrl("/places/tab/profil");
    };
    AuthPage = tslib_1.__decorate([
        Component({
            selector: "app-auth",
            templateUrl: "./auth.page.html",
            styleUrls: ["./auth.page.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router])
    ], AuthPage);
    return AuthPage;
}());
export { AuthPage };
//# sourceMappingURL=auth.page.js.map