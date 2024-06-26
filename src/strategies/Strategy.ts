import { Move, StrategyInterface } from "./types";

export abstract class BaseStrategy implements StrategyInterface {
  abstract getNextMove(): Move;
  abstract setOpponentMove(move: Move): void;
}
