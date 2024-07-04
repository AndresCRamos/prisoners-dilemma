import { StrategyBase } from "./Strategy";
import { Move } from "./types";

class Shubik extends StrategyBase {
  private isRetaliating: boolean = false;
  private retaliationLenght: number = 0;
  private retaliationRemaining: number = 0;
  private lastOpponentMove: Move | null = null;
  private lastOwnMove: Move | null = null;

  getNextMove(): Move {}

  setOpponentMove(move: Move): void {
    if (this.isRetaliating || (!this.lastOpponentMove && this.lastOwnMove)) {
      this.retaliationRemaining--;
      if (this.retaliationRemaining == 0) {
        this.isRetaliating = false;
      }
    }
    this.lastOpponentMove = move;
  }
}

export default Shubik;
