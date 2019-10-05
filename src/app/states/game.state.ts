import {Entity} from '../models/entity.model';

export interface GameState {
  currentRotation: number;
  currentTranslation: number;
  player: Entity;
  chunks: any[];
}
