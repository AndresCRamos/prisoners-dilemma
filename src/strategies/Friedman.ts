import { Move } from "./types";
import { StrategyBase } from "./Strategy";

class Friedman extends StrategyBase {
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
