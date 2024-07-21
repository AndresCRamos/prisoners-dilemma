import { StrategyBase } from "./Strategy";
import { Move } from "./types";

class TidemanAndChieruzzi extends StrategyBase {
  private lastOpponentMove: Move | null = null;
  private opponentScore: number = 0;
  private lastOwnMove: Move | null = null;
  private ownScore: number = 0;
  private isRetaliating: boolean = false;
  private retaliationLenght: number = 0;
  private retaliationRemaining: number = 0;
  private lastFreshStart: number = 0;
  private freshStart: boolean = false;
  private rememberedNumberOfOpponentDefectioons: number = 0;
  private scorePerRoundMap = new Map<[boolean, boolean], number>([
    [[true, true], 3],
    [[true, false], 0],
    [[false, true], 5],
    [[false, false], 1],
  ]);
  getNextMove(): Move {}

  setOpponentMove(move: Move): void {}
}

export default TidemanAndChieruzzi;
