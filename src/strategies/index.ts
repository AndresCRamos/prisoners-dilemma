import { Strategy } from "./Strategy";
import TitForTat from "./TitForTat";
import RandomStrategy from "./RandomStrategy";
import AlwaysCooperate from "./AlwaysCooperate";
import AlwaysDefect from "./AlwaysDefect";
import Friedman from "./Friedman";
import Davis from "./Davis";
import Joss from "./Joss";
import Grofman from "./Grofman";

export type StrategyClassMap = {
  [key: string]: new () => Strategy;
};

const strategyClassesConst = {
  "Always Cooperate": AlwaysCooperate,
  "Always Defect": AlwaysDefect,
  Davis,
  Friedman,
  Grofman,
  Joss,
  Random: RandomStrategy,
  "Tit for Tat": TitForTat,
} as const;

export type StrategyName = keyof typeof strategyClassesConst;
export const strategyNames: StrategyName[] = Object.keys(
  strategyClassesConst
) as StrategyName[];

// Ensuring the strategyClasses object conforms to StrategyClassMap type
export const strategyClasses: StrategyClassMap = strategyClassesConst;
