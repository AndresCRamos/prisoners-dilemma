import { StrategyWithHistory } from "./Strategy";
import { Move } from "./types";

class Nydegger extends StrategyWithHistory {
  getNextMove(): Move {}

  setOpponentMove(move: Move): void {}
}

export default Nydegger;
