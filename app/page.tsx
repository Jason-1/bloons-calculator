"use client";

import DisplayMonkeys from "@/components/DisplayMonkeys";
import DifficultyDropdown from "@/components/DifficultyDropdown";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDifficulty,
  selectMoney,
  selectMonkeys,
} from "./redux/selectors";
import { setMoney } from "./redux/slices/moneySlice";
import { useEffect } from "react";
import calculateTotalPrice from "@/lib/calculateTotalPrice";

export default function Home() {
  const dispatch = useDispatch();

  const money = useSelector(selectMoney);
  const selectedMonkeys = useSelector(selectMonkeys);
  const difficulty = useSelector(selectDifficulty);

  //------------------------------------------------------------------------------//

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMoney(event.target.value));
  };

  useEffect(() => {
    console.log("Money changed:", money);
  }, [money]);

  return (
    <main className="flex flex-col">
      <Input
        type="number"
        className="inline-block w-full max-w-[300px] h-auto"
        value={String(money)}
        onChange={handleInputChange}
        placeholder="Enter your money"
      />
      <span>${calculateTotalPrice(selectedMonkeys, difficulty)}</span>
      <DifficultyDropdown />
      <DisplayMonkeys />
    </main>
  );
}
