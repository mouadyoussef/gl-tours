import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PlacesPage } from "./places.page";
import { AuthGuard } from "../auth/auth.guard";
var routes = [
    {
        path: "tabs",
        component: PlacesPage,
        children: [
            {
                path: "discover",
                children: [
                    {
                        path: "",
                        loadChildren: "./discover/discover.module#DiscoverPageModule"
                    },
                    {
                        path: ":placeId",
                        loadChildren: "./discover/place-detail/place-detail.module#PlaceDetailPageModule"
                    }
                ]
            },
            {
                path: "profil",
                children: [
                    {
                        path: "",
                        redirectTo: "/places/tabs/discover",
                        pathMatch: "full"
                    },
                    {
                        path: "edit/:profilId",
                        loadChildren: "./profil/edit-profil/edit-profil.module#EditProfilPageModule"
                    },
                    {
                        path: ":profilId",
                        loadChildren: "./profil/profil.module#ProfilPageModule",
                        canLoad: [AuthGuard]
                    }
                ]
            },
            {
                path: "offers",
                children: [
                    {
                        path: "",
                        loadChildren: "./offers/offers.module#OffersPageModule"
                    },
                    {
                        path: "new",
                        loadChildren: "./offers/new-offer/new-offer.module#NewOfferPageModule",
                        canLoad: [AuthGuard]
                    },
                    {
                        path: "edit/:offerId",
                        loadChildren: "./offers/edit-offer/edit-offer.module#EditOfferPageModule",
                        canLoad: [AuthGuard]
                    },
                    {
                        path: ":offerId",
                        loadChildren: "./offers/offer-detail/offer-detail.module#OfferDetailPageModule"
                    }
                ]
            },
            {
                path: "",
                redirectTo: "/places/tabs/discover",
                pathMatch: "full"
            }
        ]
    },
    {
        path: "",
        redirectTo: "/places/tabs/discover",
        pathMatch: "full"
    }
];
var PlacesRoutingModule = /** @class */ (function () {
    function PlacesRoutingModule() {
    }
    PlacesRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], PlacesRoutingModule);
    return PlacesRoutingModule;
}());
export { PlacesRoutingModule };
//# sourceMappingURL=places-routing.module.js.map