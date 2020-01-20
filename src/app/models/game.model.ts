import { Chunk } from './world.model';
import { Entity } from './entity.model';

/**
 * Container for the game state
 */
export interface Game {
  id: string;
  startTime: Date;
  paused: boolean;
  chunk: Chunk; // current chunk, slice of the world tiles.
  world_id: string;
  player: Entity;
  enemies: Entity[];
}
