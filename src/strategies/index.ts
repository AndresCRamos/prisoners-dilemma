import TitForTat from "./TitForTat";
import RandomStrategy from "./RandomStrategy";

export const strategyClasses = {
  "Tit for Tat": TitForTat,
  Random: RandomStrategy,
};

export type StrategyName = keyof typeof strategyClasses;
