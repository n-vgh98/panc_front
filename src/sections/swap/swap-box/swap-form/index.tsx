import { Box, Chip, Tooltip } from "@mui/material";
import { useState } from "react";
import { StyledLowRisk, StyledFormWrapper, StyledTolerance } from "./styled";
import ConnectWallet from "@/components/connect-wallet";
import { startSwapApi, swapDefaultApi } from "@/apis/wallet";
import HelpIcon from "@/assets/icons/help.svg";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import useAuthStore from "@/store/useAuthStore";
import CurrencyInput from "@/components/forms/currency-input";

const fixCurrency = { symbol: "ETH", name: "ETH" };

export default function SwapForm() {
  const user = useAuthStore((state) => state.user);
  const [convertLoading, setConvertLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ratio, setRatio] = useState("");
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");
  const [currency, setCurreny] = useState({ symbol: "BTC", name: "Bitcoin" });

  const onCurrencyChange = (c) => {
    setCurreny(c);
    setValueFrom("");
    setValueTo("");
  };

  const onChangeFrom = (arg) => {
    setValueFrom(arg.value);
  };

  const onChangeEndFrom = async (arg) => {
    setValueTo("");
    if (arg.value) {
      const data = { type: currency.symbol, amount: arg.value };
      setConvertLoading(true);
      try {
        const res = await swapDefaultApi(data);
        setRatio(res.data?.data?.ratio);
        setValueTo(res.data?.data?.to_amount);
      } catch (error) {}
      setConvertLoading(false);
    }
  };

  const onSwapClick = async () => {
    const data = {
      from_type: fixCurrency.symbol,
      from_amount: valueFrom,
      to_type: currency.symbol,
    };
    setIsLoading(true);
    try {
      const res = await startSwapApi(data);
      toast.success("Your transition was successful");
    } catch (error) {}
    setIsLoading(false);
  };

  return (
    <StyledFormWrapper>
      <CurrencyInput
        value={valueFrom}
        onChange={onChangeFrom}
        onChangeEnd={onChangeEndFrom}
        currency={fixCurrency}
        sx={{ width: "100%", mb: 2 }}
        dependencies={[currency]}
      />

      <CurrencyInput
        value={valueTo}
        currency={currency}
        onCurrencyChange={onCurrencyChange}
        InputProps={{ readOnly: true }}
        sx={{ width: "100%" }}
        loading={convertLoading}
      />

      <Box my={2}>
        {ratio && (
          <StyledTolerance>
            <div>Slippage Tolerance</div>
            <span>{ratio}%</span>
          </StyledTolerance>
        )}
      </Box>

      {user ? (
        <LoadingButton
          variant="contained"
          size="large"
          disabled={!valueTo}
          onClick={() => onSwapClick()}
          loading={isLoading}
        >
          {valueTo ? "Swap" : "Enter an amount"}
        </LoadingButton>
      ) : (
        <ConnectWallet size="large" sx={{ mt: 2, height: "48px" }} />
      )}
    </StyledFormWrapper>
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
