import { StrategyBase } from "./Strategy";
import { Move } from "./types";

class Shubik extends StrategyBase {
  private isRetaliating: boolean = false;
  private retaliationLenght: number = 0;
  private retaliationRemaining: number = 0;
  private lastOpponentMove: Move | null = null;
  private lastOwnMove: Move | null = null;

  private setLastOwnMove(move: Move): Move {
    this.lastOwnMove = move;
    return this.lastOwnMove;
  }

  getNextMove(): Move {
    if (this.lastOpponentMove === null) {
      return this.setLastOwnMove(true);
    } else if (this.isRetaliating) {
      return this.setLastOwnMove(false);
    }
    if (!this.lastOpponentMove && this.lastOwnMove) {
      this.isRetaliating = true;
      this.retaliationLenght += 1;
      this.retaliationRemaining = this.retaliationLenght;
      return this.setLastOwnMove(false);
    }
    return this.setLastOwnMove(true);
  }

  setOpponentMove(move: Move): void {
    if (
      this.isRetaliating ||
      (this.lastOpponentMove !== null &&
        !this.lastOpponentMove &&
        this.lastOwnMove)
    ) {
      this.retaliationRemaining--;
      if (this.retaliationRemaining == 0) {
        this.isRetaliating = false;
      }
    }
    this.lastOpponentMove = move;
  }
}

export default Shubik;
