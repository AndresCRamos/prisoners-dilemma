import { StrategyBase } from "./Strategy";
import { Move } from "./types";

class Tullock extends StrategyBase {
  private roundsToCooperate: number = 11;
  private opponentMoveHistory: Move[] = [];
  private currentRound: number = 0;

  getNextMove(): Move {}

  setOpponentMove(move: Move): void {
    this.opponentMoveHistory.push(move);
    this.currentRound++;
  }
}
