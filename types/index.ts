export type monkey = {
  name: string;
  easy: pathPrices;
  medium: pathPrices;
  hard: pathPrices;
  impoppable: pathPrices;
};

export type pathPrices = {
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
  name: string;
  topPath: number;
  middlePath: number;
  bottomPath: number;
};
