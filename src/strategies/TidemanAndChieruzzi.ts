import { StrategyWithRounds } from "./Strategy";
import { Move } from "./types";

class TidemanAndChieruzzi extends StrategyWithRounds {
  private lastOpponentMove: Move | null = null;
  private opponentScore: number = 0;
  private opponentCooperations: number = 0;
  private opponentDefections: number = 0;
  private lastOwnMove: Move | null = null;
  private ownScore: number = 0;
  private isRetaliating: boolean = false;
  private retaliationLength: number = 0;
  private retaliationRemaining: number = 0;
  private lastFreshStart: number = 0;
  private isFreshStart: boolean = false;
  private rememberedNumberOfOpponentDefectioons: number = 0;
  private currentRound = 1;
  private pointsPerRound = new Map<string, [number, number]>([
    ["true,true", [3, 3]],
    ["true,false", [0, 5]],
    ["false,true", [5, 0]],
    ["false,false", [1, 1]],
  ]);

  private getPointsPerRound(
    ownMove: Move,
    opponentMove: Move
  ): [number, number] {
    return this.pointsPerRound.get(`${ownMove},${opponentMove}`)!;
  }

  constructor(rounds: number) {
    super(rounds);
  }

  private freshStart() {
    this.isRetaliating = false;
    this.retaliationLength = 0;
    this.retaliationRemaining = 0;
    this.rememberedNumberOfOpponentDefectioons = 0;
  }

  private addScoresFromLastRound() {
    const [lastOwnScore, lastOpponentScore] = this.getPointsPerRound(
      this.lastOwnMove!,
      this.lastOpponentMove!
    );
    this.ownScore += lastOwnScore;
    this.opponentScore += lastOpponentScore;
  }

  private decreaseRetaliationCounter() {
    if (this.isRetaliating) {
      this.retaliationRemaining--;
    }

    if (this.retaliationRemaining == 0) {
      this.isRetaliating = false;
    }
  }

  private setLastOwnMove(move: Move): Move {
    this.lastOwnMove = move;
    return move;
  }

  getNextMove(): Move {
    if (this.lastOpponentMove === null) {
      return this.setLastOwnMove(true);
    }

    if (!this.lastOpponentMove) {
      this.rememberedNumberOfOpponentDefectioons++;
    }

    if (this.isFreshStart) {
      this.isFreshStart = false;
      return this.setLastOwnMove(true);
    }

    let validFreshStart;
    if (this.lastFreshStart == 0) {
      validFreshStart = true;
    } else {
      validFreshStart = this.currentRound - this.lastFreshStart >= 20;
    }

    if (validFreshStart) {
      const validPoints = this.ownScore - this.opponentScore >= 10;
      const validRounds = this.rounds - this.currentRound >= 10;

      if (validPoints && validRounds && this.lastOpponentMove) {
        const N = this.opponentCooperations + this.opponentDefections;
        const std_deviation = N ** (1 / 2) / 2;
        const lower = N / 2 - 3 * std_deviation;
        const upper = N / 2 + 3 * std_deviation;

        if (
          this.rememberedNumberOfOpponentDefectioons <= lower ||
          this.rememberedNumberOfOpponentDefectioons >= upper
        ) {
          this.lastFreshStart = this.currentRound;
          this.freshStart();
          this.isFreshStart = true;
          return this.setLastOwnMove(true);
        }
      }
    }
    if (this.isRetaliating) {
      this.decreaseRetaliationCounter();
      return this.setLastOwnMove(false);
    }

    if (!this.lastOpponentMove) {
      this.isRetaliating = true;
      this.retaliationLength++;
      this.retaliationRemaining = this.retaliationLength;
      this.decreaseRetaliationCounter();
      return this.setLastOwnMove(false);
    }

    return this.setLastOwnMove(true);
  }

  setOpponentMove(move: Move): void {
    if (move) {
      this.opponentCooperations++;
    } else {
      this.opponentDefections++;
    }
    this.lastOpponentMove = move;
    this.addScoresFromLastRound();
    this.currentRound++;
  }
}

export default TidemanAndChieruzzi;
