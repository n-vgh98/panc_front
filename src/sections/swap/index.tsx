import PagesTabsLayout from "@/layout/pages-tabs";
import { StyledWrapper } from "./styled";
import SwapBox from "./swap-box";
import SwapChart from "./swap-chart";
import { useState } from "react";
import SwapHot from "./swap-hot";

export default function Swap() {
  const [leftView, setLeftView] = useState("chart");

  const onChangeLeftView = (newView) => {
    setLeftView(leftView === newView ? "" : newView);
  };

  return (
    <PagesTabsLayout listKey="trade">
      <StyledWrapper>
        {leftView === "chart" ? (
          <SwapChart />
        ) : leftView === "hot" ? (
          <SwapHot />
        ) : null}

        <SwapBox leftView={leftView} onChangeLeftView={onChangeLeftView} />
      </StyledWrapper>
    </PagesTabsLayout>
  );
}
