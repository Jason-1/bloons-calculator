"use client";

import DisplayMonkeys from "@/components/DisplayMonkeys";
import DifficultyDropdown from "@/components/DifficultyDropdown";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDifficulty,
  selectMoney,
  selectMonkeys,
  selectRound,
  selectUpgradesInOrder,
} from "./redux/selectors";
import { setMoney } from "./redux/slices/moneySlice";
import { useEffect } from "react";
import calculateTotalPrice from "@/lib/calculateTotalPrice";
import { setRound } from "./redux/slices/roundSlice";
import calculateRound from "@/lib/calculateRound";
import { Switch } from "@/components/ui/switch";
import { toggleUpgradesInOrder } from "./redux/slices/upgradesInOrderSlice";

export default function Home() {
  const dispatch = useDispatch();

  const money = useSelector(selectMoney);
  const round = useSelector(selectRound);
  const selectedMonkeys = useSelector(selectMonkeys);
  const difficulty = useSelector(selectDifficulty);
  const upgradesInOrder = useSelector(selectUpgradesInOrder);

  //------------------------------------------------------------------------------//

  const handleMoneyInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setMoney(event.target.value));
  };
  const handleRoundInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setRound(event.target.value));
  };
  const handleToggleUpgradesInOrder = () => {
    dispatch(toggleUpgradesInOrder());
  };

  return (
    <main className="flex flex-col">
      <div className="flex flex-row gap-4">
        <span>Money: </span>
        <Input
          type="number"
          className="inline-block w-full max-w-[300px] h-auto"
          value={String(money)}
          onChange={handleMoneyInputChange}
          placeholder="Enter your money"
        />

        <span>Round: </span>
        <Input
          type="number"
          className="inline-block w-full max-w-[300px] h-auto"
          value={String(round)}
          onChange={handleRoundInputChange}
          placeholder="Enter Round"
        />
        <div className="flex flex-row items-center gap-2">
          <span>Upgrades in order: </span>
          <Switch
            id="upgradesInOrder"
            checked={upgradesInOrder}
            onCheckedChange={() => handleToggleUpgradesInOrder()}
          />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <span>
          Total Price: ${calculateTotalPrice(selectedMonkeys, difficulty)}
        </span>
        <span>
          {calculateRound(
            round,
            money,
            calculateTotalPrice(selectedMonkeys, difficulty)
          )}
        </span>
      </div>
      <DifficultyDropdown />
      <DisplayMonkeys />
    </main>
  );
}
