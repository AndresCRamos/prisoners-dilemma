import { Move } from "./types";
import { BaseStrategy } from "./Strategy";

class AlwaysCooperate extends BaseStrategy {
  getNextMove(): Move {
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOpponentMove(_move: Move): void {}
}

export default AlwaysCooperate;
