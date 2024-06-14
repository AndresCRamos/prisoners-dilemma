import { Move } from "../strategies/types";

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
