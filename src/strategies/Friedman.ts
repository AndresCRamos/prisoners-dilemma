import { Move } from "./types";
import { BaseStrategy } from "./Strategy";

class Friedman extends BaseStrategy {
  private hasOpponentDefected: boolean = false;
  getNextMove(): Move {
    return !this.hasOpponentDefected;
  }

  setOpponentMove(move: Move): void {
    if (!move) {
      this.hasOpponentDefected = true;
    }
  }
}

export default Friedman;
