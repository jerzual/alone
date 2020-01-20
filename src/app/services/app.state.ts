import { Chunk, World } from '../models/world.model';
import { Game } from '../models/game.model';

export interface AppState {
  game: Game;
  currentWorld: World;
  loadedChunks: Map<string, Chunk>;
  worlds: World[];
}
