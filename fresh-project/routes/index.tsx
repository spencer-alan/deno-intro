import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Countdown from "../islands/Countdown.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
          WHOA WHOA WHOA!
        </p>
        <Counter count={count} />
      </div>
      <p>
        The big event will happen <Countdown target={"5-9-2024"} />
      </p>
    </div>
  );
}
