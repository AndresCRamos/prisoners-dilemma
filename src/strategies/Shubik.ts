import { StrategyBase } from "./Strategy";

class Shubik extends StrategyBase {
  getNextMove(): boolean {}
  setOpponentMove(move: boolean): void {}
}

export default Shubik;
