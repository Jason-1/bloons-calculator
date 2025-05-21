import React from "react";
import { Button } from "@/components/ui/button";
import { monkeys } from "@/data";
import DartMonkey from "@/public/DartMonkey.webp";
import { useSelector } from "react-redux";
import { selectDifficulty } from "@/app/redux/selectors";

const DisplayMonkeys = () => {
  const difficulty = useSelector(selectDifficulty);

  //------------------------------------------------------------------------------//

  return (
    <div className="grid grid-cols-4">
      {monkeys.map((monkey) => (
        <div className="flex flex-col items-center" key={monkey.name}>
          <img src={DartMonkey.src} alt="" width={120} />

          <Button variant={"secondary"}>{monkey.name}</Button>
        </div>
      ))}
    </div>
  );
};

export default DisplayMonkeys;
