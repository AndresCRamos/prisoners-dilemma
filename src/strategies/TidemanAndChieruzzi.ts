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
  private scorePerRoundMap = new Map<[boolean, boolean], [number, number]>([
    [
      [true, true],
      [3, 3],
    ],
    [
      [true, false],
      [0, 5],
    ],
    [
      [false, true],
      [5, 0],
    ],
    [
      [false, false],
      [1, 1],
    ],
  ]);

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
    const [lastOwnScore, lastOpponentScore] = this.scorePerRoundMap.get(
      [this.lastOwnMove!, this.lastOpponentMove!]!
    )!;
    this.ownScore += lastOwnScore;
    this.opponentScore += lastOpponentScore;
  }

  private setLastOwnMove(move: Move): Move {
    this.lastOwnMove = move;
    return move;
  }

  getNextMove(): Move {}

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
