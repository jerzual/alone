import {Action} from "@ngrx/store";

export enum PlayerActionTypes{
  Move = '[Player] move',
  A = '[Player] action A',
  B = '[Player] action B',
}
export class Move implements Action {
  readonly type = PlayerActionTypes.Move;

  constructor(public payload: string) {}
}

export class A implements Action {
  readonly type = PlayerActionTypes.A;

  constructor(public payload: string) {}
}

export class B implements Action {
  readonly type = PlayerActionTypes.B;

  constructor(public payload: string) {}
}

export type PlayerActions = Move | A | B;
