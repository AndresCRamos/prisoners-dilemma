import { Move } from "../strategies/types";
import { Strategy } from "../strategies/Strategy";
import { StrategyName, createStrategy } from "../strategies";

export interface RoundResult {
  round: number;
  strategy1Move: Move;
  strategy2Move: Move;
  strategy1Points: number;
  strategy2Points: number;
}

export interface PlayResult {
  strategy1: StrategyName;
  strategy2: StrategyName;
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

export const simulatePlay = (
  strategy1Name: StrategyName,
  strategy2Name: StrategyName,
  rounds: number = 20
): PlayResult => {
  const strategy1 = createStrategy(strategy1Name, rounds);
  const strategy2 = createStrategy(strategy2Name, rounds);

  let strategy1TotalPoints = 0;
  let strategy2TotalPoints = 0;
  const roundResults: RoundResult[] = [];

  for (let round = 0; round < rounds; round++) {
    const [move1, move2] = simulateRound(strategy1, strategy2);

    let strategy1Points = 0;
    let strategy2Points = 0;

    if (move1 && move2) {
      // Both cooperate
      strategy1Points = 3;
      strategy2Points = 3;
    } else if (move1 && !move2) {
      // Strategy 1 Cooperates, Strategy 2 Defects
      strategy1Points = 0;
      strategy2Points = 5;
    } else if (!move1 && move2) {
      // Strategy 1 Defects, Strategy 2 Cooperates
      strategy1Points = 5;
      strategy2Points = 0;
    } else {
      // Both Defect
      strategy1Points = 1;
      strategy2Points = 1;
    }

    strategy1TotalPoints += strategy1Points;
    strategy2TotalPoints += strategy2Points;

    roundResults.push({
      round: round + 1,
      strategy1Move: move1,
      strategy2Move: move2,
      strategy1Points: strategy1Points,
      strategy2Points: strategy2Points,
    });
  }

  return {
    strategy1: strategy1Name,
    strategy2: strategy2Name,
    rounds: roundResults,
    finalScore: {
      strategy1: strategy1TotalPoints,
      strategy2: strategy2TotalPoints,
    },
  };
};
