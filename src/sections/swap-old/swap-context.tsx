import { createContext, useContext } from "react";

type MyContextType = {
  fromCurrency: any;
  setFromCurrency: any;
  toCurrency: any;
  setToCurrency: any;
  switchCurrencies: () => void;
};

const MyContext = createContext<MyContextType>({
  fromCurrency: null,
  setFromCurrency: null,
  toCurrency: null,
  setToCurrency: null,
  switchCurrencies: () => {},
});

type Props = {
  value: MyContextType;
  children: React.ReactNode;
};

export function SwapProvider({ children, value }: Props) {
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export default function useSwap() {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useSwap must be use within SwapProvider");
  }

  return context;
}
