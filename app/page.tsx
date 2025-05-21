"use client";

import DisplayMonkeys from "@/components/DisplayMonkeys";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDifficulty } from "./redux/selectors";
import { setDifficulty } from "./redux/slices/difficultySlice";

export default function Home() {
  const dispatch = useDispatch();

  const difficulty = useSelector(selectDifficulty);

  //------------------------------------------------------------------------------//
  const handleDifficultyChange = (newDifficulty: string) => {
    dispatch(setDifficulty(newDifficulty));
  };

  return (
    <main className="flex flex-col">
      <DropdownMenu>
        <DropdownMenuTrigger>
          Difficulty Modifier: {difficulty}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleDifficultyChange("easy")}>
            Easy
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDifficultyChange("medium")}>
            Medium
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleDifficultyChange("hard")}>
            Hard
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleDifficultyChange("impoppable")}
          >
            Impoppable
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DisplayMonkeys />
    </main>
  );
}
