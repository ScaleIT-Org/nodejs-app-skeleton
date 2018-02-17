import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page2 } from "../page2/page2";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   // this is the important part for working with the ionic stack navigation
    page2 = Page2;
    
    constructor(public navCtrl: NavController) {
 
    }
 
    ionViewDidLoad() {
    }
}
