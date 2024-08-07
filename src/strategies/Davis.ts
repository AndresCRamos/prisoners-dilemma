import { Move } from "./types";
import { StrategyBase } from "./Strategy";

class Davis extends StrategyBase {
  private hasOpponentDefected: boolean = false;
  private roundsPlayed: number = 0;

  getNextMove(): Move {
    if (this.roundsPlayed < 10) {
      return true;
    }
    return !this.hasOpponentDefected;
  }

  setOpponentMove(move: Move): void {
    if (!move) {
      this.hasOpponentDefected = true;
    }
    this.roundsPlayed++;
  }
}

export default Davis;
