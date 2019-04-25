import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule } from "@angular/router";
var routes = [
    { path: "", redirectTo: "places", pathMatch: "full" },
    { path: "login", loadChildren: "./pages/auth/auth.module#AuthPageModule" },
    {
        path: "signup",
        loadChildren: "./pages/auth/signup/signup.module#SignupPageModule"
    },
    {
        path: "places",
        loadChildren: "./pages/places/places.module#PlacesPageModule"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map