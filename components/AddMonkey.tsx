import React, { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { addMonkey } from "@/app/redux/slices/monkeysSlice";
import { monkeyNames } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { selectMonkeys } from "@/app/redux/selectors";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const AddMonkey = () => {
  const dispatch = useDispatch();

  const [selectedMonkey, setSelectedMonkey] =
    useState<monkeyNames>("Dart Monkey");

  //------------------------------------------------------------------------------//

  const handleAddMonkey = (monkeyName: string) => {
    dispatch(addMonkey(monkeyName));
  };

  return (
    <div className="flex flex-col items-center">
      <Button onClick={() => handleAddMonkey(selectedMonkey)} className="w-2/3">
        <Plus />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger>
          Selected Monkey: {selectedMonkey}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Dart Monkey")}>
            Dart Monkey
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setSelectedMonkey("Boomerang Monkey")}
          >
            Boomerang Monkey
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Bomb Shooter")}>
            Bomb Shooter
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Tack Shooter")}>
            Tack Shooter
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Ice Monkey")}>
            Ice Monkey
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Glue Gunner")}>
            Glue Gunner
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Sniper Monkey")}>
            Sniper Monkey
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Monkey Sub")}>
            Monkey Sub
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setSelectedMonkey("Monkey Buccaneer")}
          >
            Monkey Buccaneer
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Monkey Ace")}>
            Monkey Ace
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Heli Pilot")}>
            Heli Pilot
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Mortar Monkey")}>
            Mortar Monkey
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setSelectedMonkey("Dartling Gunner")}
          >
            Dartling Gunner
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Wizard Monkey")}>
            Wizard Monkey
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Super Monkey")}>
            Super Monkey
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Ninja Monkey")}>
            Ninja Monkey
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Alchemist")}>
            Alchemist
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Druid")}>
            Druid
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Mermonkey")}>
            Mermonkey
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Banana Farm")}>
            Banana Farm
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Spike Factory")}>
            Spike Factory
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Monkey Village")}>
            Monkey Village
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setSelectedMonkey("Engineer Monkey")}
          >
            Engineer Monkey
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMonkey("Beast Handler")}>
            Beast Handler
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AddMonkey;
