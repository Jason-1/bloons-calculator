import { difficulties } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: { difficulty: difficulties } = {
  difficulty: "easy",
};

const difficultySlice = createSlice({
  name: "difficulty",
  initialState: initialState,
  reducers: {
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
  },
});

export const { setDifficulty } = difficultySlice.actions;
export default difficultySlice.reducer;
