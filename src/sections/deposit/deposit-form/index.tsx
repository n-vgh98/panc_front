import { useState } from "react";
import { StyledFormWrapper } from "./styled";
import ConnectWallet from "@/components/connect-wallet";
import { depositApi } from "@/apis/wallet";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import useAuthStore from "@/store/useAuthStore";
import CurrencyInput from "@/components/forms/currency-input";

const fixCurrency = { symbol: "ETH", name: "ETH" };

export default function DepositForm() {
  const user = useAuthStore((state) => state.user);
  const refetchWalletBalance = useAuthStore(
    (state) => state.refetchWalletBalance
  );
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");

  const onChange = (arg) => {
    setValue(arg.value);
  };

  const onDespositClick = async () => {
    const data = { type: fixCurrency.symbol, amount: value };
    setIsLoading(true);
    try {
      const res = await depositApi(data);
      toast.success("Your deposit was successful");
      setValue("");
      refetchWalletBalance();
    } catch (error) {}
    setIsLoading(false);
  };

  return (
    <StyledFormWrapper>
      <CurrencyInput
        value={value}
        onChange={onChange}
        currency={fixCurrency}
        sx={{ width: "100%" }}
      />

      {user ? (
        <LoadingButton
          variant="contained"
          size="large"
          disabled={!value}
          onClick={() => onDespositClick()}
          loading={isLoading}
          sx={{ mt: 2 }}
        >
          Deposit
        </LoadingButton>
      ) : (
        <ConnectWallet size="large" sx={{ mt: 2, height: "48px" }} />
      )}
    </StyledFormWrapper>
  );
}
