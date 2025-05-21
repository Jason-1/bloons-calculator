import { RootState } from "../store";

export const selectDifficulty = (state: RootState) =>
  state.difficulty.difficulty;
