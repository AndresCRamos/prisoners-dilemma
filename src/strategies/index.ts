import { Strategy } from "./Strategy";
import TitForTat from "./TitForTat";
import RandomStrategy from "./RandomStrategy";
import AlwaysCooperate from "./AlwaysCooperate";
import AlwaysDefect from "./AlwaysDefect";

export type StrategyClassMap = {
  [key: string]: new () => Strategy;
};

const strategyClassesConst = {
  "Tit for Tat": TitForTat,
  Random: RandomStrategy,
  "Always Cooperate": AlwaysCooperate,
  "Always Defect": AlwaysDefect,
} as const;

export type StrategyName = keyof typeof strategyClassesConst;
export const strategyNames: StrategyName[] = Object.keys(
  strategyClassesConst
) as StrategyName[];

// Ensuring the strategyClasses object conforms to StrategyClassMap type
export const strategyClasses: StrategyClassMap = strategyClassesConst;
