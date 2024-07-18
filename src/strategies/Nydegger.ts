import { StrategyWithHistory } from "./Strategy";
import { Move } from "./types";

class Nydegger extends StrategyWithHistory {
  private pointsToDefect: number[] = [
    1, 6, 7, 17, 22, 23, 26, 29, 30, 31, 33, 38, 39, 45, 49, 54, 55, 58, 61,
  ];

  private scoreMap = new Map<[boolean, boolean], number>([
    [[true, true], 0],
    [[true, false], 2],
    [[false, true], 1],
    [[false, false], 3],
  ]);

  getNextMove(): Move {}

  setOpponentMove(move: Move): void {
    this.setLastOpponentMove(move);
    this.currentRound++;
  }
}

export default Nydegger;
