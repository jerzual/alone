import {Injectable} from "@angular/core";
import { Chance } from 'chance';
import noise from 'noisejs';
import {Chunk, Tile, TileType, World} from "../models/world.model";
import uuid from 'uuid';

import * as PouchDB from 'pouchdb';
import {Platform} from "ionic-angular";
import { Observable } from "rxjs";

const CHUNK_SIZE = 32;
const MAX_ELEVATION = 255;
@Injectable()
export class WorldService{

  private db: PouchDB;

  constructor(private platform: Platform) { }

  initDB() : Promise<any> {
    return this.platform.ready()
      .then(() => {
        this.db = new PouchDB('worlds', { adapter: 'websql' });
      });
  }
  getAllWorlds(): Observable<World[]>{
    return Observable.fromPromise(
      this.initDB().then(() => {
        return this.db.allDocs({ include_docs: true });
      })
      .then(docs => {
        console.log('worlds: ', docs);
        // Each row has a .doc object and we just want to send an
        // array of birthday objects back to the calling code,
        // so let's map the array to contain just the .doc objects.

        return docs.rows.map(row => {
          // Convert string to date, doesn't happen automatically.
          row.doc.Date = new Date(row.doc.Date);
          return row.doc;
        });
      })
    );
  }

  createWorld(seed:string): Observable<World>{
    const rng = new Chance(seed);
    const world: World = {
      _id: uuid.v4(),
      _rev: uuid.v4(),
      seed,
      terrainSeed: Math.floor(rng.random() * 65536),
      seasonSeed: Math.floor(rng.random() * 65536),
      chunks: {}
    };
    return Observable.fromPromise(
      this.initDB().then(() => {
        return this.db.post(world);
      })
      .then(data => {
        console.log('create fullfilled: ', data);
        return data.doc;
      })
    );
  }

  generateChunk(offsetX:number, offsetY:number, world:World) {
    const chunkKey = `${Math.floor(offsetX)},${Math.floor(offsetY)}`;
    const chunk: Chunk = {
      _id: chunkKey,
      offsetX,
      offsetY,
      tiles: {},
      loaded: true
    };
    for(let i = 0; i< CHUNK_SIZE;i++){
      for(let j = 0; j< CHUNK_SIZE;j++){
        // global position
        const x = offsetX + i;
        const y = offsetX + j;
        noise.seed(world.terrainSeed);
        const noiseValue = noise.simplex2d(x / 100, y / 100) * MAX_ELEVATION;
        const tile: Tile = {
          _id: uuid.v4(),
          key: `${x},${y}`,
          x,
          y,
          world_id: world._id,
          type: WorldService.noiseToTypeScale(noiseValue)
        };

        chunk.tiles[tile._id] = tile;
      }
    }
    world.chunks[chunkKey] = chunk;
    return world;
  }

  /**
   *
   * @param {number} noiseValue a value between 0 and 255
   * @returns {TileType}
   */
  static noiseToTypeScale(noiseValue: number): TileType{
    const middle = 256/2;
    const range = 32;
    if(noiseValue < middle - range){
      return TileType.WATER;
    }
    if(noiseValue >= middle - range){
      return TileType.FLOOR;
    }
  }
}