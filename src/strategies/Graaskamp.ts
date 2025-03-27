import { random_uniform } from "../utils/random";
import { StrategyChi2TestWithRounds } from "./Strategy";
import { Move } from "./types";

class Graaskamp extends StrategyChi2TestWithRounds {
  private isOpponentRandom: boolean = false;
  private ownMoveHistory: Move[] = [];
  private opponentMoveHistory: Move[] = [];
  private nextRandomDefectionTurn: number | null = null;

  private setLastOwnMove(move: Move): Move {
    this.ownMoveHistory.push(move);
    return move;
  }

  getNextMove(): Move {
    if (this.currentRound === 0) {
      return this.setLastOwnMove(true);
    }

    if (this.currentRound < 56) {
      if (!this.opponentMoveHistory.at(-1) || this.currentRound === 50) {
        return this.setLastOwnMove(false);
      }
      return this.setLastOwnMove(true);
    }
    const { isRandom } = this.chi2test();
    this.isOpponentRandom = this.isOpponentRandom || isRandom;

    if (this.isOpponentRandom) {
      return this.setLastOwnMove(false);
    }
    const isOpponentTitForTat = this.opponentMoveHistory
      .slice(1)
      .every(
        (opponentMove, index) => opponentMove === this.ownMoveHistory[index]
      );

    const isClone = this.ownMoveHistory.every(
      (move, index) => move === this.opponentMoveHistory[index]
    );

    if (isOpponentTitForTat || isClone) {
      if (!this.opponentMoveHistory.at(-1)) {
        return this.setLastOwnMove(false);
      }
      return this.setLastOwnMove(true);
    }

    if (this.nextRandomDefectionTurn === null) {
      this.nextRandomDefectionTurn =
        Math.round(random_uniform(5, 15)) + this.currentRound;
    }

    if (this.currentRound === this.nextRandomDefectionTurn) {
      // Resample the next defection turn
      this.nextRandomDefectionTurn =
        Math.round(random_uniform(5, 15)) + this.currentRound;
      return this.setLastOwnMove(false); // Defect
    }

    return this.setLastOwnMove(true); // Cooperate
  }

  setOpponentMove(move: Move): void {
    this.addMove(move);
    this.opponentMoveHistory.push(move);
    this.currentRound++;
  }
}

export default Graaskamp;
