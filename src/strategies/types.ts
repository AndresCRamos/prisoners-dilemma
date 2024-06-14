export type Move = boolean; // True for Cooperate, False for Defect

export interface StrategyInterface {
  getNextMove(): Move;
  setOpponentMove(move: Move): void;
}
