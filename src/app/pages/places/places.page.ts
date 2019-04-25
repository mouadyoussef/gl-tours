import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-places",
  templateUrl: "./places.page.html",
  styleUrls: ["./places.page.scss"]
})
export class PlacesPage implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
