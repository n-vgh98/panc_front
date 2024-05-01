import PagesTabsLayout from "@/layout/pages-tabs";
import LotteryDraw from "./lottery-draw";
import LotteryHero from "./lottery-hero";
import LotteryFinishedRound from "./lottery-finished-round";
import LotteryCheck from "./lottery-check";
import { useEffect, useState } from "react";
import { getCurrentRoundApi } from "@/apis/lottery";
import { LotteryProvider } from "./lottery-context";
import LotteryHowPlay from "./lottery-how-play";

export default function Lottery() {
  const [currentRound, setCurrentRound] = useState<any>(null);

  useEffect(() => {
    fetchCurrentRound();
  }, []);

  const fetchCurrentRound = async () => {
    try {
      const res = await getCurrentRoundApi();
      setCurrentRound(res.data.data);
    } catch (error) {}
  };

  return (
    <PagesTabsLayout listKey="win">
      <LotteryProvider value={{ currentRound, fetchCurrentRound }}>
        <LotteryHero />
        <LotteryDraw />
        <LotteryCheck />
        <LotteryFinishedRound />
        <LotteryHowPlay />
      </LotteryProvider>
    </PagesTabsLayout>
  );
}
