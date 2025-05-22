import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { monkeys } from "@/data";
import DartMonkey from "@/public/DartMonkey.webp";
import { useDispatch, useSelector } from "react-redux";
import { selectDifficulty, selectMonkeys } from "@/app/redux/selectors";
import { addMonkey, removeMonkey } from "@/app/redux/slices/monkeysSlice";

const DisplayMonkeys = () => {
  const dispatch = useDispatch();

  const difficulty = useSelector(selectDifficulty);
  const selectedMonkeys = useSelector(selectMonkeys);

  //------------------------------------------------------------------------------//

  const handleAddMonkey = (monkeyName: string) => {
    dispatch(addMonkey(monkeyName));
  };

  const handleRemoveMonkey = (monkeyIndex: number) => {
    dispatch(removeMonkey(monkeyIndex));
  };

  useEffect(() => {
    console.log("Monkeys changed:", selectedMonkeys);
  }, [selectedMonkeys]);

  return (
    <div className="grid grid-cols-4">
      {selectedMonkeys.map((monkey, index) => (
        <div className="flex flex-col items-center" key={index}>
          <img src={DartMonkey.src} alt="" width={120} />

          <Button
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
