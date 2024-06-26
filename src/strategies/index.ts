import {
  BaseStrategyConstructor,
  Strategy,
  StrategyConstructor,
  StrategyWithRounds,
} from "./Strategy";
import TitForTat from "./TitForTat";
import RandomStrategy from "./RandomStrategy";
import AlwaysCooperate from "./AlwaysCooperate";
import AlwaysDefect from "./AlwaysDefect";
import Friedman from "./Friedman";
import Davis from "./Davis";
import Joss from "./Joss";
import Grofman from "./Grofman";

export type StrategyClassMap = {
  [key: string]: StrategyConstructor;
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

export const createStrategy = (
  strategyName: string,
  rounds: number
): Strategy => {
  const StrategyClass = strategyClasses[strategyName];

  if (StrategyClass.prototype instanceof StrategyWithRounds) {
    return new StrategyClass(rounds);
  } else {
    const baseStrategyConstructor = StrategyClass as BaseStrategyConstructor;
    return new baseStrategyConstructor();
  }
};
