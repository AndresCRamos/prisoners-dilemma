import { random_move_with_prob } from "../utils/random";
import { BaseStrategy } from "./Strategy";
import { Move } from "./types";

class Grofman extends BaseStrategy {
  private lastMove: Move | null = null;
  private lastOpponentMove: Move | null = null;

  getNextMove(): boolean {
    let nextMove = false;
    if (this.lastMove === this.lastOpponentMove) {
      nextMove = true;
    } else {
      nextMove = random_move_with_prob(2 / 7);
    }

    this.lastMove = nextMove;
    return nextMove;
  }

  setOpponentMove(move: boolean): void {
    this.lastOpponentMove = move;
  }
}

export default Grofman;
