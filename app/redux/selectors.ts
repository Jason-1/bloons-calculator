import { RootState } from "../store";

export const selectDifficulty = (state: RootState) =>
  state.difficulty.difficulty;
export const selectMoney = (state: RootState) => state.money.money;
export const selectMonkeys = (state: RootState) => state.monkeys;
export const selectRound = (state: RootState) => state.round.round;
