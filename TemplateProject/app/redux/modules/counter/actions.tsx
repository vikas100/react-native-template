import * as types from "./types";

export interface DecrementCounter {
  type: types.DECREMENT;
}

export interface IncrementCounter {
  type: types.INCREMENT;
}

export type CounterAction = DecrementCounter | IncrementCounter;

export const decrement = () => ({});
export const increment = () => ({ type: types.INCREMENT });