import { StrategyWithHistory } from "./Strategy";
import { Move } from "./types";

class Downing extends StrategyWithHistory {
  private opponentCooperationsInResponseToCooperation: number = 0;
  private opponentCooperationsInResponseToDefection: number = 0;
  private ownCooperations: number = 0;
  private ownDefections: number = 0;

  private MUTUAL_DEFECTION_POINTS = 1;
  private MUTUAL_COOPERATION_POINTS = 3;
  private COOPERATION_ON_DEFECTION_POINTS = 0;
  private DEFECTION_ON_COOPERATION_POINTS = 5;

  getNextMove(): Move {}

  protected setLastOwnMove(move: Move): Move {
    this.ownMoveHistory.push(move);
    if (move) {
      this.ownCooperations++;
    }
    this.ownDefections++;
    return move;
  }

  setOpponentMove(move: Move): void {
    this.setLastOpponentMove(move);
    this.currentRound++;
  }
}
