import { Move } from "./types";
import { StrategyBase } from "./Strategy";

class AlwaysDefect extends StrategyBase {
  getNextMove(): Move {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOpponentMove(_move: Move): void {}
}

export default AlwaysDefect;
