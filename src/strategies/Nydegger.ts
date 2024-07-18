import { StrategyWithHistory } from "./Strategy";
import { Move } from "./types";

class Nydegger extends StrategyWithHistory {
  getNextMove(): Move {}

  setOpponentMove(move: Move): void {
    this.setLastOpponentMove(move);
    this.currentRound++;
  }
}

export default Nydegger;
