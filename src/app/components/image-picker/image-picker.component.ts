import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-image-picker",
  templateUrl: "./image-picker.component.html",
  styleUrls: ["./image-picker.component.scss"]
})
export class ImagePickerComponent implements OnInit {
  constructor(private platform: Platform) {}
  ngOnInit() {
    console.log("Mobile:", this.platform.is("mobile"));
    console.log("Hybrid:", this.platform.is("hybrid"));
    console.log("iOS:", this.platform.is("ios"));
    console.log("Android:", this.platform.is("android"));
    console.log("Desktop:", this.platform.is("desktop"));
  }

  onPickImage() {}

  onFileChosen(event: Event) {}
}
