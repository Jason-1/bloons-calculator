import { difficulties, monkeyState } from "@/types";
import { monkeyPrices } from "@/data";

export default function calculateTotalPrice(
  monkeys: monkeyState[],
  difficulty: difficulties
) {
  // Loop through all monkeys and their paths
  // Calculate the total price based on the selected difficulty
  let totalPrice = 0;
  monkeys.forEach((monkey) => {
    const currentMonkeyPrices = monkeyPrices.find(
      (m) => m.name === monkey.name
    );

    const currentDifficultyPrices = currentMonkeyPrices?.[difficulty];

    //add base price
    totalPrice += currentDifficultyPrices?.base || 0;

    // Calculate the price for the top path
    let topPathPrice = 0;
    for (let i = 1; i <= monkey.topPath; i++) {
      topPathPrice += currentDifficultyPrices?.top[i as keyof typeof top] || 0;
    }
    totalPrice += topPathPrice;

    // Calculate the price for the middle path
    let middlePathPrice = 0;
    for (let i = 1; i <= monkey.middlePath; i++) {
      middlePathPrice +=
        currentDifficultyPrices?.middle[i as keyof typeof top] || 0;
    }
    totalPrice += middlePathPrice;

    // Calculate the price for the bottom path
    let bottomPathPrice = 0;
    for (let i = 1; i <= monkey.bottomPath; i++) {
      bottomPathPrice +=
        currentDifficultyPrices?.bottom[i as keyof typeof top] || 0;
    }
    totalPrice += bottomPathPrice;
  });

  return totalPrice;
}
