import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
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

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
