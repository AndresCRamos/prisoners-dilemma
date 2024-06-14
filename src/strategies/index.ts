import { Strategy } from "./Strategy";
import TitForTat from "./TitForTat";
import RandomStrategy from "./RandomStrategy";

export type StrategyClassMap = {
  [key: string]: new () => Strategy;
};

const strategyClassesConst = {
  "Tit for Tat": TitForTat,
  Random: RandomStrategy,
} as const;

export type StrategyName = keyof typeof strategyClassesConst;
export const strategyNames: StrategyName[] = Object.keys(
  strategyClassesConst
) as StrategyName[];

// Ensuring the strategyClasses object conforms to StrategyClassMap type
export const strategyClasses: StrategyClassMap = strategyClassesConst;
