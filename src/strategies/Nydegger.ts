import { StrategyWithHistory } from "./Strategy";
import { Move } from "./types";

class Nydegger extends StrategyWithHistory {
  private pointsToDefect: number[] = [
    1, 6, 7, 17, 22, 23, 26, 29, 30, 31, 33, 38, 39, 45, 49, 54, 55, 58, 61,
  ];

  private scoreMap = new Map<string, number>([
    ["true,true", 0],
    ["true,false", 2],
    ["false,true", 1],
    ["false,false", 3],
  ]);

  private getScorePerMove(ownMove: Move, opponentMove: Move): number {
    return this.scoreMap.get(`${ownMove},${opponentMove}`)!;
  }

  private getScore(): number {
    const [lastOwnMove, secondLastOwnMove, thirdLastOwnMove] =
      this.ownMoveHistory.slice(-3);
    const [lastOpponentMove, secondLastOpponentMove, thirdLastOpponentMove] =
      this.opponentMoveHistory.slice(-3);

    const lastScore = this.getScorePerMove(lastOwnMove, lastOpponentMove) * 16;
    const secondLastScore =
      this.getScorePerMove(secondLastOwnMove, secondLastOpponentMove) * 4;
    const thirdLastScore = this.getScorePerMove(
      thirdLastOwnMove,
      thirdLastOpponentMove
    );

    return lastScore + secondLastScore + thirdLastScore;
  }

  getNextMove(): Move {
    if (this.currentRound == 0) {
      return this.setLastOwnMove(true);
    }

    if (this.currentRound == 1) {
      const lastOpponentMove = this.opponentMoveHistory.at(-1)!;
      return this.setLastOwnMove(lastOpponentMove);
    }
    if (this.currentRound == 2) {
      if (!this.opponentMoveHistory.at(-2) && this.opponentMoveHistory.at(-1)) {
        return this.setLastOwnMove(false);
      }
      const lastOpponentMove = this.opponentMoveHistory.at(-1)!;
      return this.setLastOwnMove(lastOpponentMove);
    }

    const score = this.getScore();
    if (this.pointsToDefect.includes(score)) {
      return this.setLastOwnMove(false);
    }
    return this.setLastOwnMove(true);
  }

  setOpponentMove(move: Move): void {
    this.setLastOpponentMove(move);
    this.currentRound++;
  }
}

export default Nydegger;
