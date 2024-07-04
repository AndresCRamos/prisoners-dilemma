import { StrategyBase } from "./Strategy";
import { Move } from "./types";

class Shubik extends StrategyBase {
  private isRetaliating: boolean = false;
  private retaliationLenght: number = 0;
  private retaliationRemaining: number = 0;
  private lastOpponentMove: Move | null = null;
  private lastOwnMove: Move | null = null;

  getNextMove(): Move {}

  setOpponentMove(move: Move): void {}
}

export default Shubik;
