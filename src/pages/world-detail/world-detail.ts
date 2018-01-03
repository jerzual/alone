import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {World} from "../../models/world.model";

/**
 * Generated class for the WorldDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-world-detail',
  templateUrl: 'world-detail.html',
})
export class WorldDetailPage {

  public world: World;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorldDetailPage');
  }

}
