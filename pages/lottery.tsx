import Head from "next/head";
import Lottery from "@/sections/lottery";

export default function LotteryPage() {
  return (
    <>
      <Head>
        <title>Lottery | PancakeSwap</title>
      </Head>

      <Lottery />
    </>
  );
}
