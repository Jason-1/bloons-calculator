import { createSlice } from "@reduxjs/toolkit";
import { monkeyState } from "@/types";

const initialState: monkeyState[] = [];

const monkeysSlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    addMonkey: (state, action) => {
      state.push({
        name: action.payload,
        topPath: 0,
        middlePath: 0,
        bottomPath: 0,
      });
    },

    removeMonkey: (state, action) => {
      state.splice(action.payload, 1);
    },

    upgradeTopPath: (state, action) => {
      if (state[action.payload].topPath < 5) {
        state[action.payload].topPath += 1;
      }
    },
    upgradeMiddlePath: (state, action) => {
      if (state[action.payload].middlePath < 5) {
        state[action.payload].middlePath += 1;
      }
    },
    upgradeBottomPath: (state, action) => {
      if (state[action.payload].bottomPath < 5) {
        state[action.payload].bottomPath += 1;
      }
    },

    downgradeTopPath: (state, action) => {
      if (state[action.payload].topPath > 0) {
        state[action.payload].topPath -= 1;
      }
    },
    downgradeMiddlePath: (state, action) => {
      if (state[action.payload].middlePath > 0) {
        state[action.payload].middlePath -= 1;
      }
    },
    downgradeBottomPath: (state, action) => {
      if (state[action.payload].bottomPath > 0) {
        state[action.payload].bottomPath -= 1;
      }
    },
  },
});

export const {
  addMonkey,
  removeMonkey,
  upgradeTopPath,
  upgradeMiddlePath,
  upgradeBottomPath,
  downgradeTopPath,
  downgradeMiddlePath,
  downgradeBottomPath,
} = monkeysSlice.actions;
export default monkeysSlice.reducer;
