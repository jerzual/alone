import { Sprite, Vector2 } from 'babylonjs';

export interface IEntity {
  _id: string;
  sprite: Sprite;
  name: string;
  worldId: string;
  position: Vector2;
  life: number;
  hits: number;
  sight: number;
  rage: number;
  speed: number;
  trauma: number;
  shield: number;
}

export class Entity {

}
