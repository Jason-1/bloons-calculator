import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { monkeys } from "@/data";
import DartMonkey from "@/public/DartMonkey.webp";
import { useDispatch, useSelector } from "react-redux";
import { selectDifficulty, selectMonkeys } from "@/app/redux/selectors";
import {
  addMonkey,
  removeMonkey,
  upgradeBottomPath,
  upgradeMiddlePath,
  upgradeTopPath,
} from "@/app/redux/slices/monkeysSlice";
import { monkeyState } from "@/types";

const DisplayMonkeys = () => {
  const dispatch = useDispatch();

  const difficulty = useSelector(selectDifficulty);
  const selectedMonkeys = useSelector(selectMonkeys);

  //------------------------------------------------------------------------------//
  useEffect(() => {
    console.log("Monkeys changed:", selectedMonkeys);
  }, [selectedMonkeys]);

  const handleAddMonkey = (monkeyName: string) => {
    dispatch(addMonkey(monkeyName));
  };

  const handleRemoveMonkey = (monkeyIndex: number) => {
    dispatch(removeMonkey(monkeyIndex));
  };

  const handleUpgradeTopPath = (monkeyIndex: number) => {
    dispatch(upgradeTopPath(monkeyIndex));
  };

  const handleUpgradeMiddlePath = (monkeyIndex: number) => {
    dispatch(upgradeMiddlePath(monkeyIndex));
  };

  const handleUpgradeBottomPath = (monkeyIndex: number) => {
    dispatch(upgradeBottomPath(monkeyIndex));
  };

  const handleDisableUpgrade = (monkey: monkeyState, path: string) => {
    if (path === "top") {
      if (monkey.topPath === 5) return true;
      if (monkey.middlePath > 2 && monkey.topPath === 2) return true;
      if (monkey.bottomPath > 2 && monkey.topPath === 2) return true;
      if (monkey.middlePath > 0 && monkey.bottomPath > 0) return true;
    }
    if (path === "middle") {
      if (monkey.middlePath === 5) return true;
      if (monkey.topPath > 2 && monkey.middlePath === 2) return true;
      if (monkey.bottomPath > 2 && monkey.middlePath === 2) return true;
      if (monkey.topPath > 0 && monkey.bottomPath > 0) return true;
    }
    if (path === "bottom") {
      if (monkey.bottomPath === 5) return true;
      if (monkey.topPath > 2 && monkey.bottomPath === 2) return true;
      if (monkey.middlePath > 2 && monkey.bottomPath === 2) return true;
      if (monkey.topPath > 0 && monkey.middlePath > 0) return true;
    }

    return false;
  };

  return (
    <div className="grid grid-cols-4">
      {selectedMonkeys.map((monkey, index) => (
        <div className="flex flex-col items-center" key={index}>
          <span>
            {monkey.topPath}
            {monkey.middlePath}
            {monkey.bottomPath} {monkey.name}
          </span>
          <img src={DartMonkey.src} alt="" width={120} />

          <Button
            onClick={() => handleUpgradeTopPath(index)}
            disabled={handleDisableUpgrade(monkey, "top")}
          >
            Upgrade Top Path
          </Button>
          <Button
            onClick={() => handleUpgradeMiddlePath(index)}
            disabled={handleDisableUpgrade(monkey, "middle")}
          >
            Upgrade Middle Path
          </Button>
          <Button
            onClick={() => handleUpgradeBottomPath(index)}
            disabled={handleDisableUpgrade(monkey, "bottom")}
          >
            Upgrade Bottom Path
          </Button>
          <Button
            className="mt-2"
            variant={"destructive"}
            onClick={() => handleRemoveMonkey(index)}
          >
            Remove {monkey.name}
          </Button>
        </div>
      ))}
      <Button onClick={() => handleAddMonkey("Dart Monkey")}>Add Monkey</Button>
    </div>
  );
};

export default DisplayMonkeys;
