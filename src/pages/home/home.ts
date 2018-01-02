import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('barCanvas') barCanvas;
 
    barChart: any;
 
    constructor(public navCtrl: NavController) {
 
    }
 
    ionViewDidLoad() {
 
        this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:false
                        }
                    }]
                }
            }
        });
        }
}
