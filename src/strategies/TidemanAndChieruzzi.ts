import { StrategyBase } from "./Strategy";
import { Move } from "./types";

class TidemanAndChieruzzi extends StrategyBase {
  getNextMove(): Move {}

  setOpponentMove(move: Move): void {}
}

export default TidemanAndChieruzzi;
