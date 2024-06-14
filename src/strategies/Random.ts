import { Move } from "./types";
import { Strategy } from "./strategy";

class Random extends Strategy {
  getNextMove(): Move {
    return Math.random() < 0.5;
  }

  setOpponentMove(_: Move): void {}
}

export default Random;
