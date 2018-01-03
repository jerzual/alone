import { Action } from '@ngrx/store';
import { Options } from '../models/options.model';

export enum OptionsActionTypes {
  Save = '[Options] Save',
  Load = '[Options] Load',
  Select = '[Options] Select',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handoptions/advanced-types.html#discriminated-unions
 */
export class Save implements Action {
  readonly type = OptionsActionTypes.Save;

  constructor(public payload: string) {}
}

export class Load implements Action {
  readonly type = OptionsActionTypes.Load;

  constructor(public payload: Options) {}
}

export class Select implements Action {
  readonly type = OptionsActionTypes.Select;

  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type OptionsActions = Save | Load | Select;
