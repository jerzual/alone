
export enum TileType {
  FLOOR,
  WATER,
  TRAP,
  DOOR
}

/**
 * Tile is the unit of the map
 */
export interface Tile {
  _id: string;
  world_id: string;
  key: string;
  x: number;
  y: number;
  type: TileType
}
export interface Chunk {
  _id: string;
  offsetX: number;
  offsetY: number;
  tiles: any;
  loaded: boolean;
}
export interface World {
  _id: string;
  _rev:string;
  seed: string;
  terrainSeed: number;
  seasonSeed: number;
  chunks: any;
}

export function generateMockWorld(): World{
  return null;
}
