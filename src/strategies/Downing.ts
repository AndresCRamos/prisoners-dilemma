import { StrategyWithHistory } from "./Strategy";
import { Move } from "./types";

class Downing extends StrategyWithHistory {
  private opponentCooperationsInResponseToCooperation: number = 0;
  private opponentCooperationsInResponseToDefection: number = 0;
  private ownCooperations: number = 0;
  private ownDefections: number = 0;

  private R_MUTUAL_COOPERATION_POINTS = 3;
  private P_MUTUAL_DEFECTION_POINTS = 1;
  private S_COOPERATION_ON_DEFECTION_POINTS = 0;
  private T_DEFECTION_ON_COOPERATION_POINTS = 5;

  getNextMove(): Move {
    if (this.currentRound == 0) {
      return this.setLastOwnMove(false);
    }

    if (this.currentRound == 1) {
      if (this.opponentMoveHistory.at(-1)) {
        this.opponentCooperationsInResponseToCooperation++;
      }
      return this.setLastOwnMove(false);
    }

    if (this.ownMoveHistory.at(-2) && this.opponentMoveHistory.at(-1)) {
      this.opponentCooperationsInResponseToCooperation++;
    }

    if (!this.ownMoveHistory.at(-2) && this.opponentMoveHistory.at(-1)) {
      this.opponentCooperationsInResponseToDefection++;
    }

    const alpha =
      this.opponentCooperationsInResponseToCooperation /
      (this.ownCooperations + 1);
    const beta =
      this.opponentCooperationsInResponseToDefection /
      Math.max(this.ownDefections, 2);

    const expected_value_of_cooperating =
      alpha * this.R_MUTUAL_COOPERATION_POINTS +
      (1 - alpha) * this.S_COOPERATION_ON_DEFECTION_POINTS;
    const expected_value_of_defecting =
      beta * this.T_DEFECTION_ON_COOPERATION_POINTS +
      (1 - beta) * this.P_MUTUAL_DEFECTION_POINTS;

    if (expected_value_of_cooperating > expected_value_of_defecting) {
      return this.setLastOwnMove(true);
    }
    if (expected_value_of_defecting > expected_value_of_cooperating) {
      return this.setLastOwnMove(false);
    }
    return this.setLastOwnMove(!this.ownMoveHistory.at(-1));
  }

  protected setLastOwnMove(move: Move): Move {
    this.ownMoveHistory.push(move);
    if (move) {
      this.ownCooperations++;
    } else {
      this.ownDefections++;
    }
    return move;
  }

  setOpponentMove(move: Move): void {
    this.setLastOpponentMove(move);
    this.currentRound++;
  }
}

export default Downing;