export type difficulties = "easy" | "medium" | "hard" | "impoppable";

export type monkeyNames =
  | "Dart Monkey"
  | "Boomerang Monkey"
  | "Bomb Shooter"
  | "Tack Shooter"
  | "Ice Monkey"
  | "Glue Gunner"
  | "Sniper Monkey"
  | "Monkey Sub"
  | "Monkey Buccaneer"
  | "Monkey Ace"
  | "Heli Pilot"
  | "Mortar Monkey"
  | "Dartling Gunner"
  | "Wizard Monkey"
  | "Super Monkey"
  | "Ninja Monkey"
  | "Alchemist"
  | "Druid"
  | "Mermonkey"
  | "Banana Farm"
  | "Spike Factory"
  | "Monkey Village"
  | "Engineer Monkey"
  | "Beast Handler";

export type CHIMPSCashType = {
  round: number;
  cash: number;
};

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
