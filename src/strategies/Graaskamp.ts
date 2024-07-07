import { StrategyChi2TestWithRounds } from "./Strategy";
import { Move } from "./types";

class Graaskamp extends StrategyChi2TestWithRounds {
  getNextMove(): Move {}

  setOpponentMove(move: Move): void {}
}

export default Graaskamp;
