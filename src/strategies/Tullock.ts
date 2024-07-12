import { random_move_with_prob } from "../utils/random";
import { StrategyBase } from "./Strategy";
import { Move } from "./types";

class Tullock extends StrategyBase {
  private roundsToCooperate: number = 11;
  private opponentMoveHistory: Move[] = [];
  private currentRound: number = 0;

  getNextMove(): Move {
    if (this.currentRound < this.roundsToCooperate) {
      return true;
    }
    const rounds = this.roundsToCooperate--;
    const cooperateCount = this.opponentMoveHistory
      .slice(-rounds)
      .filter((move) => move).length;
    const prob_cooperate = Math.max(0, cooperateCount / rounds - 0.1);
    return random_move_with_prob(prob_cooperate);
  }

  setOpponentMove(move: Move): void {
    this.opponentMoveHistory.push(move);
    this.currentRound++;
  }
}
