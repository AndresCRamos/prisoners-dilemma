import chi2gof from "@stdlib/stats-chi2gof";
import { Move, StrategyInterface } from "./types";

export abstract class StrategyBase implements StrategyInterface {
  abstract getNextMove(): Move;
  abstract setOpponentMove(move: Move): void;
}

export abstract class StrategyWithRounds extends StrategyBase {
  protected rounds: number;

  constructor(rounds: number) {
    super();
    this.rounds = rounds;
  }

  abstract getNextMove(): Move;
  abstract setOpponentMove(move: Move): void;
}

export class StrategyChi2Test extends StrategyBase {
  protected opponentCooperations: number = 0;
  protected opponentDefections: number = 0;
  protected alpha: number = 0.05;
  protected currentRound: number = 0;

  protected addMove(move: Move): void {
    if (move) {
      this.opponentCooperations++;
    } else {
      this.opponentDefections++;
    }
  }

  protected chi2test(): { pValue: number; isRandom: boolean } {
    const observed = [this.opponentDefections, this.opponentCooperations];
    const expected = [this.currentRound / 2, this.currentRound / 2];

    const result = chi2gof(observed, expected);
    const pValue = result.pValue;

    return { pValue, isRandom: pValue >= this.alpha };
  }

  getNextMove(): Move {
    throw new Error("getNextMove must be implemented");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOpponentMove(_move: Move): void {
    throw new Error("setOpponentMove must be implemented");
  }
}

export class StrategyChi2TestWithRounds extends StrategyChi2Test {
  protected rounds: number;

  constructor(rounds: number) {
    super();
    this.rounds = rounds;
  }
}

export class StrategyWithHistory extends StrategyWithRounds {
  protected ownMoveHistory: Move[] = [];
  protected opponentMoveHistory: Move[] = [];
  protected currentRound: number = 0;

  protected setLastOwnMove(move: Move): Move {
    this.ownMoveHistory.push(move);
    return move;
  }

  protected setLastOpponentMove(move: Move): void {
    this.opponentMoveHistory.push(move);
  }

  getNextMove(): Move {
    throw new Error("getNextMove must be implemented");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOpponentMove(_move: Move): void {
    throw new Error("setOpponentMove must be implemented");
  }
}

export type Strategy =
  | StrategyBase
  | StrategyWithRounds
  | StrategyChi2Test
  | StrategyChi2TestWithRounds
  | StrategyWithHistory;

export type StrategyBaseConstructor = new () => Strategy;
export type StrategyWithRoundsConstructor = new (rounds: number) => Strategy;

export type StrategyConstructor =
  | StrategyBaseConstructor
  | StrategyWithRoundsConstructor;
