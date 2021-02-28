import { Injectable } from '@angular/core';
import * as faker from 'faker';
import noise from 'noisejs';
import { Chunk, Tile, TileType, World } from '../models/world.model';
import { v4 as uuidv4 } from 'uuid';

import * as PouchDB from 'pouchdb';
import { Platform } from '@ionic/angular';
import { Observable, from } from 'rxjs';

const CHUNK_SIZE = 32;
const MAX_ELEVATION = 255;

@Injectable()
export class WorldService {

  constructor(private platform: Platform) {}
  private db: PouchDB.Database;

  /**
   *
   */
  static noiseToTypeScale(noiseValue: number): TileType {
    const middle = 256 / 2;
    const range = 32;
    if (noiseValue < middle - range) {
      return TileType.WATER;
    }
    if (noiseValue >= middle - range) {
      return TileType.FLOOR;
    }
  }

  async initDB(): Promise<any> {
    return this.platform.ready().then(() => {
      this.db = new PouchDB('worlds', { adapter: 'memory'/*'websql'*/ });
    });
  }

  getAllWorlds(): Observable<World[]> {
    return from(
      this.initDB()
        .then(() => {
          return this.db.allDocs<World>({ include_docs: true });
        })
        .then(docs => {
          console.log('worlds: ', docs);
          // Each row has a .doc object and we just want to send an
          // array of birthday objects back to the calling code,
          // so let's map the array to contain just the .doc objects.

          return docs.rows.map(row => {
            // Convert string to date, doesn't happen automatically.
            // row.doc.Date = new Date(row.doc.Date);
            return row.doc;
          });
        }),
    );
  }

  createWorld(seed: string): Observable<void> {
    faker.seed(Number(seed));
    const rng = {random: faker.random.number};
    const world: World = {
      _id: uuidv4(),
      _rev: uuidv4(),
      seed,
      terrainSeed: Math.floor(rng.random() * 65536),
      seasonSeed: Math.floor(rng.random() * 65536),
      chunks: {},
    };
    return from(
      this.initDB()
        .then(() => {
          return this.db.post(world);
        })
        .then(data => {
          console.log('create fullfilled: ', data);
        }),
    );
  }

  generateChunk(offsetX: number, offsetY: number, world: World) {
    const chunkKey = `${Math.floor(offsetX)},${Math.floor(offsetY)}`;
    const chunk: Chunk = {
      _id: chunkKey,
      offsetX,
      offsetY,
      tiles: {},
      loaded: true,
    };
    for (let i = 0; i < CHUNK_SIZE; i++) {
      for (let j = 0; j < CHUNK_SIZE; j++) {
        // global position
        const x = offsetX + i;
        const y = offsetX + j;
        noise.seed(world.terrainSeed);
        const noiseValue = noise.simplex2d(x / 100, y / 100) * MAX_ELEVATION;
        const tile: Tile = {
          _id: uuidv4(),
          key: `${x},${y}`,
          x,
          y,
          world_id: world._id,
          type: WorldService.noiseToTypeScale(noiseValue),
        };

        chunk.tiles[tile._id] = tile;
      }
    }
    world.chunks[chunkKey] = chunk;
    return world;
  }
}
