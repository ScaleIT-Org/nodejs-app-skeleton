import { Component, ViewChild } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";

@IonicPage({
  name: "admin",
  segment: "admin"
})
@Component({
  selector: "admin-page",
  templateUrl: "adminpage.html"
})
export class AdminPage {
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {}
}
