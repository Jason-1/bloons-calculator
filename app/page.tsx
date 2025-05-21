import { Button } from "@/components/ui/button";
import { monkeys } from "@/data";

export default function Home() {
  return (
    <main>
      {monkeys.map((monkey) => (
        <Button>{monkey.name}</Button>
      ))}
    </main>
  );
}
