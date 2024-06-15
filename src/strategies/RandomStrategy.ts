import { Move } from "./types";
import { Strategy } from "./Strategy";
import { random_move_with_prob } from "../utils/random";

class RandomStrategy extends Strategy {
  getNextMove(): Move {
    return random_move_with_prob();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setOpponentMove(_move: Move): void {}
}

export default RandomStrategy;
