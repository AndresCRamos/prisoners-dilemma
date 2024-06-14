import { Move } from "./types";
import { Strategy } from "./Strategy";

class AlwaysDefect extends Strategy {
  getNextMove(): Move {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOpponentMove(_move: Move): void {}
}

export default AlwaysDefect;
