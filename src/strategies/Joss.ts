import { Move } from "./types";
import { Strategy } from "./Strategy";

class Joss extends Strategy {
  private lastOpponentMove: Move | null = null;

  getNextMove(): Move {
    if (this.lastOpponentMove === null) {
      return true;
    }
    if (this.lastOpponentMove) {
      if (Math.random() > 0.1) {
        return true;
      }
    }
    return false;
  }

  setOpponentMove(move: Move): void {
    this.lastOpponentMove = move;
  }
}

export default Joss;
