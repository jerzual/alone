import {Component, OnInit, OnDestroy, ElementRef, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  running: boolean;
  @ViewChild('aloneGame') canvasRef: ElementRef;

  constructor(public navCtrl: NavController) {

  }
}
