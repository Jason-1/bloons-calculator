import { CHIMPSCash } from "@/data";

export default function calculateRound(
  currentRound: number,
  money: number,
  totalPrice: number
) {
  let totalCash = money;
  let finalRound = currentRound;

  if (money >= totalPrice) {
    return "You can afford it now!";
  }

  for (let i = 0; i < CHIMPSCash.length; i++) {
    const roundCash = CHIMPSCash[i];

    // Skip forward in the loop until we reach the current round
    if (roundCash.round < currentRound) {
      continue;
    }

    if (totalCash >= totalPrice) {
      finalRound = roundCash.round;
      break;
    }

    if (roundCash.round === 0 && currentRound <= 5) {
      totalCash += roundCash.cash;
    } else if (roundCash.round >= currentRound) {
      totalCash += roundCash.cash;
    }
  }

  if (finalRound === currentRound) {
    return "You can't afford this!";
  }

  return "Affordable by round: " + finalRound;
}
