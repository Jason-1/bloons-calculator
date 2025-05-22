import { RootState } from "../store";

export const selectDifficulty = (state: RootState) =>
  state.difficulty.difficulty;
export const selectMoney = (state: RootState) => state.money.money;
