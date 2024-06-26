import { Move, StrategyInterface } from "./types";

export abstract class BaseStrategy implements StrategyInterface {
  abstract getNextMove(): Move;
  abstract setOpponentMove(move: Move): void;
}

export abstract class StrategyWithRounds extends BaseStrategy {
  protected rounds: number;

  constructor(rounds: number) {
    super();
    this.rounds = rounds;
  }

  abstract getNextMove(): Move;
  abstract setOpponentMove(move: Move): void;
}

export type Strategy = BaseStrategy | StrategyWithRounds;

export type BaseStrategyConstructor = new () => Strategy;
export type StrategyWithRoundsConstructor = new (rounds: number) => Strategy;

export type StrategyConstructor =
  | BaseStrategyConstructor
  | StrategyWithRoundsConstructor;
