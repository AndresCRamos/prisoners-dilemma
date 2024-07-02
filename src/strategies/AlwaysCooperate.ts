import { Move } from "./types";
import { StrategyBase } from "./Strategy";

class AlwaysCooperate extends StrategyBase {
  getNextMove(): Move {
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOpponentMove(_move: Move): void {}
}

export default AlwaysCooperate;
