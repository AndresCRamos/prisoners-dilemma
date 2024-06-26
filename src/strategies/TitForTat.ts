import { Move } from "./types";
import { BaseStrategy } from "./Strategy";

class TitForTat extends BaseStrategy {
  private lastOpponentMove: Move | null = null;

  getNextMove(): Move {
    if (this.lastOpponentMove === null) {
      return true;
    }
    return this.lastOpponentMove;
  }

  setOpponentMove(move: Move): void {
    this.lastOpponentMove = move;
  }
}

export default TitForTat;
