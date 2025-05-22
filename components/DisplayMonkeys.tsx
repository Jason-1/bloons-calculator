import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import DartMonkey from "@/public/DartMonkey.webp";
import { useDispatch, useSelector } from "react-redux";
import { selectMonkeys } from "@/app/redux/selectors";
import {
  addMonkey,
  downgradeBottomPath,
  downgradeMiddlePath,
  downgradeTopPath,
  removeMonkey,
  upgradeBottomPath,
  upgradeMiddlePath,
  upgradeTopPath,
} from "@/app/redux/slices/monkeysSlice";
import { monkeyState } from "@/types";
import { Plus } from "lucide-react";

const DisplayMonkeys = () => {
  const dispatch = useDispatch();

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

  const handleDowngradeTopPath = (monkeyIndex: number) => {
    dispatch(downgradeTopPath(monkeyIndex));
  };
  const handleDowngradeMiddlePath = (monkeyIndex: number) => {
    dispatch(downgradeMiddlePath(monkeyIndex));
  };
  const handleDowngradeBottomPath = (monkeyIndex: number) => {
    dispatch(downgradeBottomPath(monkeyIndex));
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

  const handleDisableDowngrade = (monkey: monkeyState, path: string) => {
    if (path === "top") {
      if (monkey.topPath === 0) return true;
    }
    if (path === "middle") {
      if (monkey.middlePath === 0) return true;
    }
    if (path === "bottom") {
      if (monkey.bottomPath === 0) return true;
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
          <div className="flex flex-row">
            <div className="flex flex-col">
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
            </div>
            <div className="flex flex-col">
              <Button
                onClick={() => handleDowngradeTopPath(index)}
                disabled={handleDisableDowngrade(monkey, "top")}
              >
                Downgrade Top Path
              </Button>
              <Button
                onClick={() => handleDowngradeMiddlePath(index)}
                disabled={handleDisableDowngrade(monkey, "middle")}
              >
                Downgrade Middle Path
              </Button>
              <Button
                onClick={() => handleDowngradeBottomPath(index)}
                disabled={handleDisableDowngrade(monkey, "bottom")}
              >
                Downgrade Bottom Path
              </Button>
            </div>
          </div>
          <Button
            className="mt-2"
            variant={"destructive"}
            onClick={() => handleRemoveMonkey(index)}
          >
            Remove {monkey.name}
          </Button>
        </div>
      ))}
      <Button onClick={() => handleAddMonkey("Dart Monkey")}>
        <Plus />
      </Button>
    </div>
  );
};

export default DisplayMonkeys;
