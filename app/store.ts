import { configureStore } from "@reduxjs/toolkit";
import difficultySlice from "./redux/slices/difficultySlice";
import moneySlice from "./redux/slices/moneySlice";
import monkeysSlice from "./redux/slices/monkeysSlice";

export const store = configureStore({
  reducer: {
    difficulty: difficultySlice,
    money: moneySlice,
    monkeys: monkeysSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
