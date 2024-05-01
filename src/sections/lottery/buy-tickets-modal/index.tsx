import Modal from "@/components/modal";
import {
  StyledCost,
  StyledDescription,
  StyledDiscount,
  StyledLabel,
  StyledPay,
} from "./styled";
import { Divider, InputAdornment, Tooltip } from "@mui/material";
import TicketIcon from "@/assets/icons/ticket.svg";
import HelpIcon from "@/assets/icons/help.svg";
import ConnectWallet from "@/components/connect-wallet";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { buyTicketApi } from "@/apis/lottery";
import { toast } from "react-toastify";
import useAuthStore from "@/store/useAuthStore";
import BuyTicketsResultModal from "../buy-tickets-result-modal";
import useModal from "@/hooks/useModal";
import useLottery from "../lottery-context";
import { formatPrice } from "@/lib/numeral";
import { NumericFormat } from "react-number-format";
import CommonInput from "@/components/forms/common-input";

type BuyTicketsModalProps = {
  open: boolean;
  toggle: () => void;
};

export default function BuyTicketsModal({
  open,
  toggle,
}: BuyTicketsModalProps) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const user = useAuthStore((state) => state.user);
  const refetchWalletBalance = useAuthStore(
    (state) => state.refetchWalletBalance
  );
  const [isLoading, setIsLoading] = useState(false);
  const [openResult, toggleResult] = useModal();
  const { fetchCurrentRound } = useLottery();

  const totalValue = Number(value) * 50;
  // const discountPercent = (value - 1) * 0.05;
  // const discountValue = (totalValue * discountPercent) / 100;

  const onBuyClick = async () => {
    setIsLoading(true);
    try {
      const res = await buyTicketApi({ ticket_count: value });
      toggle();
      toggleResult();
      setResult(res.data?.data);
      setValue("");
      fetchCurrentRound();
      refetchWalletBalance();
    } catch (error) {}
    setIsLoading(false);
  };

  return (
    <>
      <Modal open={open} onClose={toggle} title="Buy Tickets" maxWidth="xs">
        <StyledLabel>
          <span>Buy:</span>
          <div>
            Tickets
            <TicketIcon />
          </div>
        </StyledLabel>

        <NumericFormat
          value={value}
          allowNegative={false}
          decimalScale={0}
          onValueChange={({ value }) => setValue(value)}
          isAllowed={({ value }) => value !== "0"}
          customInput={CommonInput}
          subField={`$${formatPrice(totalValue)}`}
          sx={{ width: "100%", mb: 2 }}
        />

        {/* <StyledCost>
          <span>Cost</span>
          <span>${totalValue}</span>
        </StyledCost>
        <StyledDiscount>
          <div>
            <span>{discountPercent}%</span>
            <span>Bulk discount</span>
            <Tooltip
              title={
                <>
                  Buying multiple tickets in a single transaction gives a
                  discount. The discount increases in a linear way, up to the
                  maximum of 100 tickets:
                  <br />
                  2 tickets: 0.05%
                  <br />
                  50 tickets: 2.45%
                  <br />
                  100 tickets: 4.95%
                </>
              }
            >
              <span>
                <HelpIcon />
              </span>
            </Tooltip>
          </div>
          <span>~{discountValue} CAKE</span>
        </StyledDiscount> */}

        <Divider sx={{ mb: "8px" }} />

        <StyledPay>
          <span>You pay</span>
          <span>${formatPrice(totalValue)}</span>
        </StyledPay>
        {/* <StyledPay>
          <span>You pay</span>
          <span>~{totalValue - discountValue} CAKE</span>
        </StyledPay> */}

        {!user ? (
          <ConnectWallet
            size="large"
            sx={{ mb: "24px", height: "48px", width: "100%" }}
          />
        ) : (
          <LoadingButton
            variant="contained"
            size="large"
            sx={{ mb: "24px", height: "48px", width: "100%" }}
            loading={isLoading}
            onClick={() => onBuyClick()}
            disabled={!value}
          >
            Buy Instantly
          </LoadingButton>
        )}

        <StyledDescription>
          "Buy Instantly" chooses random numbers, with no duplicates among your
          tickets. Prices are set before each round starts, equal to $50 at that
          time. Purchases are final.
        </StyledDescription>
      </Modal>

      <BuyTicketsResultModal
        open={openResult}
        toggle={toggleResult}
        result={result}
      />
    </>
  );
}
