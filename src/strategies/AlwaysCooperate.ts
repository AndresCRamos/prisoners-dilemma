import { Move } from "./types";
import { Strategy } from "./Strategy";

class AlwaysCooperate extends Strategy {
  getNextMove(): Move {
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOpponentMove(_move: Move): void {}
}

export default AlwaysCooperate;
