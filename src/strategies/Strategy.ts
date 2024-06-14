import { Move, StrategyInterface } from "./types";

export abstract class Strategy implements StrategyInterface {
  abstract getNextMove(): Move;
  abstract setOpponentMove(move: Move): void;
}
