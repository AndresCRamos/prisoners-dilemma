import { Move } from "./types";
import { BaseStrategy } from "./Strategy";

class AlwaysDefect extends BaseStrategy {
  getNextMove(): Move {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOpponentMove(_move: Move): void {}
}

export default AlwaysDefect;
