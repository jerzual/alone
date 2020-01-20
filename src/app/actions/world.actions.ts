import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { World } from '../models/world.model';
export enum WorldActionTypes {
  Generate = '[World] Generate world',
  LoadChunk = ' [World] Load Chunk',
  DisposeChunk = ' [World] Dispose Chunk',
}

export class Generate implements Action {
  readonly type = WorldActionTypes.Generate;

  constructor(public payload: string) {}
}

export class LoadChunk implements Action {
  readonly type = WorldActionTypes.LoadChunk;

  constructor(public payload: string) {}
}

export class DisposeChunk implements Action {
  readonly type = WorldActionTypes.DisposeChunk;

  constructor(public payload: string) {}
}

export type WorldActions = Generate | LoadChunk | DisposeChunk;
