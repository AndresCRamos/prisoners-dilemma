import { StrategyChi2Test } from "./Strategy";
import { Move } from "./types";

class SteinAndRapaport extends StrategyChi2Test {
  private opponentLastMove: Move = false;
  private isOpponentRandom: boolean = false;

  getNextMove(): Move {
    if (this.currentRound < 5) {
      return true;
    } else if (this.currentRound < 15) {
      return this.opponentLastMove;
    }

    if (this.currentRound % 15 == 0) {
      const { isRandom } = this.chi2test();
      this.isOpponentRandom = isRandom;
    }

    if (this.isOpponentRandom) {
      return false;
    }

    return this.opponentLastMove;
  }

  setOpponentMove(move: Move): void {
    this.addMove(move);
    this.opponentLastMove = move;
    this.currentRound++;
  }
}

export default SteinAndRapaport;
