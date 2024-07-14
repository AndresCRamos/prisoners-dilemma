import { StrategyWithHistory } from "./Strategy";
import { Move } from "./types";

class Downing extends StrategyWithHistory {
  private opponentCooperationsInResponseToCooperation: number = 0;
  private opponentCooperationsInResponseToDefection: number = 0;
  private ownCooperations: number = 0;
  private ownDefections: number = 0;

  private mutualDefectionPoints = 1;
  private mutualCooperationPoints = 3;
  private cooperationOnDefectionPoints = 0;
  private defectionOnCooperationPoints = 5;

  getNextMove(): Move {}

  setOpponentMove(move: Move): void {
    this.setLastOpponentMove(move);
    this.currentRound++;
  }
}
