import { Move } from "../strategies/types";
import { Strategy } from "../strategies/Strategy";

interface RoundResult {
  round: number;
  strategy1Move: Move;
  strategy2Move: Move;
  strategy1Points: number;
  strategy2Points: number;
}

interface PlayResult {
  rounds: RoundResult[];
  finalScore: {
    strategy1: number;
    strategy2: number;
  };
}

export const simulateRound = (
  strategy1: Strategy,
  strategy2: Strategy
): [Move, Move] => {
  const move1 = strategy1.getNextMove();
  const move2 = strategy2.getNextMove();

  strategy1.setOpponentMove(move2);
  strategy2.setOpponentMove(move1);

  return [move1, move2];
};
