import useModal from "@/hooks/useModal";
import {
  Button,
  Chip,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import {
  StyledLowRisk,
  StyledFormWrapper,
  StyledInfos,
  StyledSwitch,
  StyledTextField,
  StyledToken,
  StyledTolerance,
  StyledPrice,
} from "./styled";
import SelectTokenModal from "../select-token-modal";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import CopyIcon from "@/assets/icons/copy.svg";
import HelpIcon from "@/assets/icons/help.svg";
import ArrowDown2Icon from "@/assets/icons/arrow-down-2.svg";
import SwitchIcon from "@/assets/icons/switch.svg";
import Switch2Icon from "@/assets/icons/switch-2.svg";
import PencilIcon from "@/assets/icons/pencil.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import SearchIcon from "@/assets/icons/search.svg";
import ConnectWallet from "@/components/connect-wallet";
import useSwap from "../../swap-context";
import { useAccount } from "wagmi";

export default function SwapForm({ toggleSetting }) {
  const [open, toggle] = useModal();
  const { isConnected } = useAccount();

  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    switchCurrencies,
  } = useSwap();

  const onSelect = (token) => {
    if (open === "from") setFromCurrency((prev) => ({ ...prev, token }));
    else if (open === "to") setToCurrency((prev) => ({ ...prev, token }));
  };

  const onChangeFirst = async (e) => {
    const value = e.target.value;
    setFromCurrency((prev) => ({ ...prev, value, loading: false }));
    if (value) {
      setToCurrency((prev) => ({ ...prev, value: "", loading: true }));
      await new Promise((r) => setTimeout(r, 1000));
      setToCurrency((prev) => ({ ...prev, value: "3", loading: false }));
    } else {
      setToCurrency((prev) => ({ ...prev, value: "", loading: false }));
    }
  };

  const onChangeSecond = (e) => {};

  return (
    <>
      <StyledFormWrapper>
        {/* Top Input */}
        <StyledToken>
          <div onClick={() => toggle("from")}>
            <img
              src={String(fromCurrency.token.icon)}
              width={24}
              height={24}
              loading="lazy"
            />
            <span>{fromCurrency.token.name}</span>
            <ArrowDownIcon />
          </div>
          {fromCurrency.token.token_address && <CopyIcon />}
        </StyledToken>

        <StyledTextField
          value={fromCurrency.value}
          onChange={onChangeFirst}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {fromCurrency.loading ? (
                  <CircularProgress size={20} />
                ) : fromCurrency.value ? (
                  fromCurrency.value * fromCurrency.token.usd
                ) : null}
              </InputAdornment>
            ),
          }}
        />

        {/* Top Input */}

        <StyledSwitch>
          <IconButton onClick={() => switchCurrencies()}>
            <ArrowDown2Icon />
            <SwitchIcon />
          </IconButton>
        </StyledSwitch>

        {/* Bottom Input */}

        <StyledToken>
          <div onClick={() => toggle("to")}>
            <img
              src={String(toCurrency.token.icon)}
              width={24}
              height={24}
              loading="lazy"
            />
            <span>{toCurrency.token.name}</span>
            <ArrowDownIcon />
          </div>
          {toCurrency.token.token_address && <CopyIcon />}
        </StyledToken>

        <StyledTextField
          value={toCurrency.value}
          onChange={onChangeSecond}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {toCurrency.loading ? (
                  <CircularProgress size={20} />
                ) : toCurrency.value ? (
                  toCurrency.value * toCurrency.token.usd
                ) : null}
              </InputAdornment>
            ),
          }}
        />

        {/* Bottom Input */}

        <StyledPrice>
          <span>Price</span>
          <div>
            1 BNB <SwitchIcon /> 172.027 CAKE <Switch2Icon />
          </div>
        </StyledPrice>

        <StyledTolerance>
          <div>
            Slippage Tolerance
            <PencilIcon onClick={() => toggleSetting()} />
          </div>
          <span>0.5%</span>
        </StyledTolerance>

        {isConnected ? (
          <Button variant="contained" size="large">
            Enter an amount
          </Button>
        ) : (
          <ConnectWallet size="large" sx={{ mt: 2, height: "48px" }} />
        )}

        <StyledInfos>
          <div>
            <div>
              <span>Minimum received</span>
              <Tooltip title="Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.">
                <span>
                  <HelpIcon />
                </span>
              </Tooltip>
            </div>
            <div>0.01156 BNB</div>
          </div>
          <div>
            <div>
              <span>Price Impact</span>
              <Tooltip
                title={
                  <>
                    AMM: The difference between the market price and estimated
                    price due to trade size.
                    <br />
                    MM: No slippage against quote from market maker
                  </>
                }
              >
                <span>
                  <HelpIcon />
                </span>
              </Tooltip>
            </div>
            <div>{"<0.01%"}</div>
          </div>
          <div>
            <div>
              <span>Trading Fee</span>
              <Tooltip
                title={
                  <>
                    AMM: Fee ranging from 0.1% to 0.01% depending on the pool
                    fee tier. You can check the fee tier by clicking the
                    magnifier icon under the “Route” section.
                    <br />
                    <a
                      href="https://docs.pancakeswap.finance/products/pancakeswap-exchange/faq#what-will-be-the-trading-fee-breakdown-for-v3-exchange"
                      target="_blank"
                    >
                      Fee Breakdown and Tokenomics
                    </a>
                    <br />
                    MM: PancakeSwap does not charge any fees for trades.
                    However, the market makers charge an implied fee of 0.05%
                    (non-stablecoin) / 0.01% (stablecoin) factored into the
                    quotes provided by them.
                  </>
                }
              >
                <span>
                  <HelpIcon />
                </span>
              </Tooltip>
            </div>
            <div>0.001 CAKE</div>
          </div>
          <div>
            <div>
              <span>Route</span>
              <Tooltip title="Route is automatically calculated based on your routing preference to achieve the best price for your trade.">
                <span>
                  <HelpIcon />
                </span>
              </Tooltip>
            </div>
            <div>
              CAKE
              <ArrowRightIcon />
              BNB
              <SearchIcon />
            </div>
          </div>
        </StyledInfos>
      </StyledFormWrapper>

      <SelectTokenModal open={!!open} toggle={toggle} onSelect={onSelect} />
    </>
  );
}

const LowRisk = () => {
  return (
    <StyledLowRisk>
      <Tooltip
        title={
          <>
            Risk scan results are provided by a third party{" "}
            <a href="https://www.avengerdao.org/" target="_blank">
              AvengerDAO
            </a>
            <br />
            It is a tool for indicative purposes only to allow users to check
            the reference risk level of a BNB Chain Smart Contract. Please do
            your own research - interactions with any BNB Chain Smart Contract
            is at your own risk.
            <br />
            Learn more about risk rating{" "}
            <a
              href="https://www.avengerdao.org/docs/meter/consumer-api/RiskBand"
              target="_blank"
            >
              here
            </a>
            .
          </>
        }
      >
        <Chip
          label={
            <>
              Low Risk <HelpIcon />
            </>
          }
          color="primary"
        />
      </Tooltip>
    </StyledLowRisk>
  );
};
