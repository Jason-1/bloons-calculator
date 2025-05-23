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
} from "./redux/selectors";
import { setMoney } from "./redux/slices/moneySlice";
import { useEffect } from "react";
import calculateTotalPrice from "@/lib/calculateTotalPrice";
import { setRound } from "./redux/slices/roundSlice";

export default function Home() {
  const dispatch = useDispatch();

  const money = useSelector(selectMoney);
  const round = useSelector(selectRound);
  const selectedMonkeys = useSelector(selectMonkeys);
  const difficulty = useSelector(selectDifficulty);

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

  useEffect(() => {
    console.log("Money changed:", money);
  }, [money]);

  return (
    <main className="flex flex-col">
      <div>
        <span>Money: </span>
        <Input
          type="number"
          className="inline-block w-full max-w-[300px] h-auto"
          value={String(money)}
          onChange={handleMoneyInputChange}
          placeholder="Enter your money"
        />
        {"   "}
        <span>Round: </span>
        <Input
          type="number"
          className="inline-block w-full max-w-[300px] h-auto"
          value={String(round)}
          onChange={handleRoundInputChange}
          placeholder="Enter Round"
        />
      </div>
      <span>${calculateTotalPrice(selectedMonkeys, difficulty)}</span>
      <DifficultyDropdown />
      <DisplayMonkeys />
    </main>
  );
}
