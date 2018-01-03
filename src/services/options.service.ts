import {Platform} from "ionic-angular";
import {Injectable} from "@angular/core";
import { PouchDB } from 'pouchdb';

@Injectable()
export class WorldService {

  private db: PouchDB;

  constructor(private platform: Platform) {
  }

  initDB(): Promise<any> {
    return this.platform.ready()
      .then(() => {
        this.db = new PouchDB('options', {adapter: 'websql'});
      });
  }

}
