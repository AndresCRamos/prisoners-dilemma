import {
  StrategyBaseConstructor,
  Strategy,
  StrategyConstructor,
  StrategyWithRounds,
  StrategyWithRoundsConstructor,
} from "./Strategy";
import TitForTat from "./TitForTat";
import RandomStrategy from "./RandomStrategy";
import AlwaysCooperate from "./AlwaysCooperate";
import AlwaysDefect from "./AlwaysDefect";
import Friedman from "./Friedman";
import Davis from "./Davis";
import Joss from "./Joss";
import Grofman from "./Grofman";
import Feld from "./Feld";
import Anonymous from "./Anonymous";
import SteinAndRapaport from "./SteinAndRapaport";
import Graaskamp from "./Graaskamp";
import Shubik from "./Shubik";
import Tullock from "./Tullock";

export type StrategyClassMap = {
  [key: string]: StrategyConstructor;
};

const strategyClassesConst = {
  "Always Cooperate": AlwaysCooperate,
  "Always Defect": AlwaysDefect,
  Davis,
  Feld,
  Friedman,
  Graaskamp,
  Grofman,
  Joss,
  "Name Witheld": Anonymous,
  Random: RandomStrategy,
  Shubik,
  "Stein and Rapaport": SteinAndRapaport,
  "Tit for Tat": TitForTat,
  Tullock,
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
    const strategyWithRoundsConstructor =
      StrategyClass as StrategyWithRoundsConstructor;
    return new strategyWithRoundsConstructor(rounds);
  } else {
    const baseStrategyConstructor = StrategyClass as StrategyBaseConstructor;
    return new baseStrategyConstructor();
  }
};
