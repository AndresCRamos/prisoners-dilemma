import { Move } from "./types";
import { StrategyBase } from "./Strategy";
import { random_move_with_prob } from "../utils/random";

class Joss extends StrategyBase {
  private lastOpponentMove: Move | null = null;

  getNextMove(): Move {
    if (this.lastOpponentMove === null) {
      return true;
    }
    if (this.lastOpponentMove) {
      if (random_move_with_prob(0.9)) {
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
