import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { selectMonkeys } from "@/app/redux/selectors";
import {
  downgradeBottomPath,
  downgradeMiddlePath,
  downgradeTopPath,
  removeMonkey,
  upgradeBottomPath,
  upgradeMiddlePath,
  upgradeTopPath,
} from "@/app/redux/slices/monkeysSlice";

import { monkeyNames, monkeyState } from "@/types";
import AddMonkey from "./AddMonkey";

import DartMonkey from "@/public/DartMonkey.webp";
import BoomerangMonkey from "@/public/BoomerangMonkey.webp";
import BombShooter from "@/public/BombShooter.webp";
import TackShooter from "@/public/TackShooter.webp";
import IceMonkey from "@/public/IceMonkey.webp";
import GlueGunner from "@/public/GlueGunner.webp";
import SniperMonkey from "@/public/SniperMonkey.webp";
import MonkeySub from "@/public/MonkeySub.webp";
import MonkeyBuccaneer from "@/public/MonkeyBuccaneer.webp";
import MonkeyAce from "@/public/MonkeyAce.webp";
import HeliPilot from "@/public/HeliPilot.webp";
import MortarMonkey from "@/public/MortarMonkey.webp";
import DartlingGunner from "@/public/DartlingGunner.webp";
import WizardMonkey from "@/public/WizardMonkey.webp";
import SuperMonkey from "@/public/SuperMonkey.webp";
import NinjaMonkey from "@/public/NinjaMonkey.webp";
import Alchemist from "@/public/MonkeyAlchemist.webp";
import Druid from "@/public/Druid.webp";
import Mermonkey from "@/public/Mermonkey.webp";
import BananaFarm from "@/public/BananaFarm.webp";
import SpikeFactory from "@/public/SpikeFactory.webp";
import MonkeyVillage from "@/public/MonkeyVillage.webp";
import EngineerMonkey from "@/public/EngineerMonkey.webp";
import BeastHandler from "@/public/BeastHandler.webp";

const DisplayMonkeys = () => {
  const getImageSrc = (monkeyName: monkeyNames) => {
    switch (monkeyName) {
      case "Dart Monkey":
        return DartMonkey.src;
      case "Boomerang Monkey":
        return BoomerangMonkey.src;
      case "Bomb Shooter":
        return BombShooter.src;
      case "Tack Shooter":
        return TackShooter.src;
      case "Ice Monkey":
        return IceMonkey.src;
      case "Glue Gunner":
        return GlueGunner.src;
      case "Sniper Monkey":
        return SniperMonkey.src;
      case "Monkey Sub":
        return MonkeySub.src;
      case "Monkey Buccaneer":
        return MonkeyBuccaneer.src;
      case "Monkey Ace":
        return MonkeyAce.src;
      case "Heli Pilot":
        return HeliPilot.src;
      case "Mortar Monkey":
        return MortarMonkey.src;
      case "Dartling Gunner":
        return DartlingGunner.src;
      case "Wizard Monkey":
        return WizardMonkey.src;
      case "Super Monkey":
        return SuperMonkey.src;
      case "Ninja Monkey":
        return NinjaMonkey.src;
      case "Alchemist":
        return Alchemist.src;
      case "Druid":
        return Druid.src;
      case "Mermonkey":
        return Mermonkey.src;
      case "Banana Farm":
        return BananaFarm.src;
      case "Spike Factory":
        return SpikeFactory.src;
      case "Monkey Village":
        return MonkeyVillage.src;
      case "Engineer Monkey":
        return EngineerMonkey.src;
      case "Beast Handler":
        return BeastHandler.src;
      default:
        return DartMonkey.src;
    }
  };

  const dispatch = useDispatch();

  const selectedMonkeys = useSelector(selectMonkeys);

  //------------------------------------------------------------------------------//

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
          <img
            src={getImageSrc(monkey.name)}
            alt=""
            width={120}
            height={120}
            className="object-contain"
          />
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

      <AddMonkey />
    </div>
  );
};

export default DisplayMonkeys;
