import { Divider, IconButton } from "@mui/material";
import { StyledBox, StyledIcons } from "./styled";
import ChartIcon from "@/assets/icons/chart.svg";
import ChartHideIcon from "@/assets/icons/chart-hide.svg";
import HotIcon from "@/assets/icons/hot.svg";
import HotHideIcon from "@/assets/icons/hot-hide.svg";
import SettingIcon from "@/assets/icons/setting.svg";
import HistoryIcon from "@/assets/icons/history.svg";
import SwapSettingModal from "./swap-setting-modal";
import useModal from "@/hooks/useModal";
import SwapForm from "./swap-form";
import TransactionsModal from "@/components/modals/transactions-modal";

export default function SwapBox({ leftView, onChangeLeftView }) {
  const [openSetting, toggleSetting] = useModal();
  const [openTransaction, toggleTransaction] = useModal();

  return (
    <StyledBox>
      <h1>Swap</h1>
      <p>Trade tokens in an instant</p>

      <StyledIcons>
        <IconButton onClick={() => onChangeLeftView("chart")}>
          {leftView === "chart" ? <ChartHideIcon /> : <ChartIcon />}
        </IconButton>
        <IconButton onClick={() => onChangeLeftView("hot")}>
          {leftView === "hot" ? <HotHideIcon /> : <HotIcon />}
        </IconButton>
        <IconButton onClick={() => toggleSetting()}>
          <SettingIcon />
        </IconButton>
        {/* <IconButton onClick={() => toggleTransaction()}>
          <HistoryIcon />
        </IconButton> */}
      </StyledIcons>

      <Divider />

      <SwapForm />

      <SwapSettingModal open={openSetting} toggle={toggleSetting} />
      <TransactionsModal open={openTransaction} toggle={toggleTransaction} />
    </StyledBox>
  );
}
