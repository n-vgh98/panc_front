import PagesTabsLayout from "@/layout/pages-tabs";
import { StyledWrapper } from "./styled";
import SwapBox from "./swap-box";
import SwapChart from "./swap-chart";
import { useState } from "react";
import SwapHot from "./swap-hot";
import tokensList from "./token-list";
import { SwapProvider } from "./swap-context";

export default function Swap() {
  const [leftView, setLeftView] = useState("chart");

  const onChangeLeftView = (newView) => {
    setLeftView(leftView === newView ? "" : newView);
  };

  const [fromCurrency, setFromCurrency] = useState({
    token: tokensList[1],
    value: "",
    loading: false,
  });

  const [toCurrency, setToCurrency] = useState({
    token: tokensList[2],
    value: "",
    loading: false,
  });

  const switchCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <PagesTabsLayout listKey="trade">
      <SwapProvider
        value={{
          fromCurrency,
          setFromCurrency,
          toCurrency,
          setToCurrency,
          switchCurrencies,
        }}
      >
        <StyledWrapper>
          {leftView === "chart" ? (
            <SwapChart />
          ) : leftView === "hot" ? (
            <SwapHot />
          ) : null}

          <SwapBox leftView={leftView} onChangeLeftView={onChangeLeftView} />
        </StyledWrapper>
      </SwapProvider>
    </PagesTabsLayout>
  );
}
