import useModal from "@/hooks/useModal";
import { useState } from "react";
import { StyledFormWrapper, StyledTokenFrom, StyledTokenTo } from "./styled";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import ConnectWallet from "@/components/connect-wallet";
import { withdrawalApi } from "@/apis/wallet";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import useAuthStore from "@/store/useAuthStore";
import SelectTokenModal from "@/components/modals/select-token-modal";
import { NumericFormat } from "react-number-format";
import CommonInput from "@/components/forms/common-input";

export default function WithdrawForm() {
  const [openSelect, toggleSelect] = useModal();
  const user = useAuthStore((state) => state.user);
  const refetchWalletBalance = useAuthStore(
    (state) => state.refetchWalletBalance
  );
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");
  const [currency, setCurrency] = useState({ symbol: "BTC", name: "Bitcoin" });

  const onWithdrawClick = async () => {
    const data = {
      type: currency.symbol,
      amount: value,
    };

    setIsLoading(true);
    try {
      await withdrawalApi(data);
      toast.success(
        "Withdraw was created successfully, You can check it on 'Cashout List'"
      );
      setValue("");
      refetchWalletBalance();
    } catch (error) {}
    setIsLoading(false);
  };

  return (
    <>
      <StyledFormWrapper>
        <StyledTokenFrom>
          <span>USD</span>
        </StyledTokenFrom>

        <NumericFormat
          value={value}
          allowNegative={false}
          onValueChange={({ value }) => setValue(value)}
          isAllowed={({ value }) => value !== "0"}
          customInput={CommonInput}
          sx={{ width: "100%" }}
          thousandSeparator
          prefix="$"
        />

        <StyledTokenTo>
          <span>Currency:</span>
          <div onClick={() => toggleSelect()}>
            <span>{currency.symbol}</span>
            <ArrowDownIcon />
          </div>
        </StyledTokenTo>

        {user ? (
          <LoadingButton
            variant="contained"
            size="large"
            disabled={!value}
            onClick={() => onWithdrawClick()}
            loading={isLoading}
            sx={{ mt: 2 }}
          >
            Withdraw
          </LoadingButton>
        ) : (
          <ConnectWallet size="large" sx={{ mt: 2, height: "48px" }} />
        )}
      </StyledFormWrapper>

      {openSelect && (
        <SelectTokenModal open toggle={toggleSelect} onSelect={setCurrency} />
      )}
    </>
  );
}
