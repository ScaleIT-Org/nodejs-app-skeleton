import { IonicPage } from "ionic-angular";
import { Component, ViewChild } from "@angular/core";
import { NavController } from "ionic-angular";
import { AdminPage } from "../adminpage/adminpage";

@IonicPage({
  name: "user",
  segment: "user"
})
@Component({
  selector: "user-page",
  templateUrl: "userpage.html"
})
export class UserPage {
  // this is the important part for working with the ionic stack navigation
  // page2 = Page2;
  admin = AdminPage;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {}
}
