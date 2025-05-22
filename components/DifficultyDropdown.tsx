import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useDispatch, useSelector } from "react-redux";
import { selectDifficulty } from "@/app/redux/selectors";
import { setDifficulty } from "@/app/redux/slices/difficultySlice";

const DifficultyDropdown = () => {
  const dispatch = useDispatch();

  const difficulty = useSelector(selectDifficulty);

  //------------------------------------------------------------------------------//
  const handleDifficultyChange = (newDifficulty: string) => {
    dispatch(setDifficulty(newDifficulty));
  };

  return (
    <div>
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
    </div>
  );
};

export default DifficultyDropdown;
