import { random_move_with_prob, random_uniform } from "../utils/random";
import { BaseStrategy } from "./Strategy";
import { Move } from "./types";

class Anonymous extends BaseStrategy {
  getNextMove(): Move {
    const p = random_uniform(3, 10) / 10;
    return random_move_with_prob(p);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOpponentMove(_move: Move): void {}
}

export default Anonymous;
