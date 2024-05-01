import { createContext, useContext } from "react";

type MyContextType = {
  currentRound: any;
  fetchCurrentRound: () => void;
};

const MyContext = createContext<MyContextType>({
  currentRound: null,
  fetchCurrentRound: () => {},
});

type Props = {
  value: MyContextType;
  children: React.ReactNode;
};

export function LotteryProvider({ children, value }: Props) {
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export default function useLottery() {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useLottery must be use within LotteryProvider");
  }

  return context;
}
