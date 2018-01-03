import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Engine } from "babylonjs";

/*
  Generated class for the BabylonJsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BabylonJsProvider {
  private engine:Engine;

  constructor(public http: HttpClient) {
  }

  getEngine(): Engine{
    return this.engine;
  }
}
