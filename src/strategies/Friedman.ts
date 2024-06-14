import { Move } from "./types";
import { Strategy } from "./Strategy";

class Friedman extends Strategy {
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
