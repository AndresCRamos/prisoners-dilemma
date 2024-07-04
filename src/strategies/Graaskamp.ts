import { StrategyChi2Test } from "./Strategy";
import { Move } from "./types";

class Graaskamp extends StrategyChi2Test {
  getNextMove(): Move {}

  setOpponentMove(move: Move): void {}
}

export default Graaskamp;
