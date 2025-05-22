export type difficulties = "easy" | "medium" | "hard" | "impoppable";

export type monkeyNames =
  | "Dart Monkey"
  | "Boomerang Monkey"
  | "Bomb Shooter"
  | "Tack Shooter";

export type monkey = {
  name: monkeyNames;
  easy: pathPrices;
  medium: pathPrices;
  hard: pathPrices;
  impoppable: pathPrices;
};

export type pathPrices = {
  base: number;
  top: prices;
  middle: prices;
  bottom: prices;
};

export type prices = {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
};

export type monkeyState = {
  name: monkeyNames;
  topPath: number;
  middlePath: number;
  bottomPath: number;
};
