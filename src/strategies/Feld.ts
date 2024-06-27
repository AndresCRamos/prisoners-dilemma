import { random_move_with_prob } from "../utils/random";
import { StrategyWithRounds } from "./Strategy";
import { Move } from "./types";

class Feld extends StrategyWithRounds {
  private startCooperationProb: number = 1;
  private endCooperationProb: number = 0.5;
  private lastOpponentMove: Move | null = null;
  private currentRound: number = 1;

  constructor(rounds: number) {
    super(rounds);
  }

  private getCooperationProbability() {
    const diff = this.startCooperationProb - this.endCooperationProb;
    const slope = diff / this.rounds;
    const currentProb = this.startCooperationProb - slope * this.currentRound;
    if (currentProb > this.endCooperationProb) {
      return currentProb;
    }
    return this.endCooperationProb;
  }

  getNextMove(): Move {
    if (this.lastOpponentMove === null) {
      return true;
    }
    if (!this.lastOpponentMove) {
      return false;
    }
    return random_move_with_prob(this.getCooperationProbability());
  }

  setOpponentMove(move: Move): void {
    this.lastOpponentMove = move;
    this.currentRound++;
  }
}

export default Feld;
