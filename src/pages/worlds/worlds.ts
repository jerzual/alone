import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WorldDetailPage} from "../world-detail/world-detail";
import {Observable} from "rxjs/Observable";
import {World} from "../../models/world.model";
import {WorldActions} from "../../actions/world.actions";
import {AppState} from "../../services/app.state";
import {Store} from "@ngrx/store";

/**
 * Generated class for the WorldsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-worlds',
  templateUrl: 'worlds.html',
})
export class WorldsPage {

  public worlds: Observable<World[]>;

  constructor(public navCtrl: NavController) {
  }

  createWorld() {
  }

  worldTapped(event, world) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(WorldDetailPage, {
      world: world
    });
  }
}
