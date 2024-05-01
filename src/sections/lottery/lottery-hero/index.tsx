import { Button } from "@mui/material";
import { StyledWrapper } from "./styled";
import { useEffect, useState } from "react";
import useModal from "@/hooks/useModal";
import BuyTicketsModal from "../buy-tickets-modal";
import ClockIcon from "@/assets/icons/clock.svg";
import { getCurrentRoundApi } from "@/apis/lottery";
import useLottery from "../lottery-context";
import { formatPrice } from "@/lib/numeral";

export default function LotteryHero() {
  const { currentRound } = useLottery();
  const [ticketsExist, setTicketsExist] = useState(true);
  const [open, toggle] = useModal();

  return (
    <>
      <StyledWrapper>
        <div data-bg />

        <div data-stars>
          <img
            src="/images/lottery/star-big.png"
            width="124px"
            height="109px"
            alt=""
          />
          <img
            src="/images/lottery/star-small.png"
            width="70px"
            height="62px"
            alt=""
          />
          <img
            src="/images/lottery/three-stars.png"
            width="130px"
            height="144px"
            alt=""
          />
          <img
            src="/images/lottery/ticket-l.png"
            width="123px"
            height="83px"
            alt=""
          />
          <img
            src="/images/lottery/ticket-r.png"
            width="121px"
            height="72px"
            alt=""
          />
        </div>

        <h2>The PancakeSwap Lottery</h2>
        {ticketsExist ? (
          <div data-price>
            <span>${formatPrice(currentRound?.total_price)}</span>
            <span>in prizes!</span>
          </div>
        ) : (
          <div data-soon>Tickets on sale soon</div>
        )}
        <div>
          <img src="/images/ticket.svg" />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => toggle()}
            disabled={!ticketsExist}
            startIcon={!ticketsExist ? <ClockIcon /> : null}
          >
            {ticketsExist ? "Buy Tickets" : "On sale soon!"}
          </Button>
        </div>
      </StyledWrapper>

      <BuyTicketsModal open={open} toggle={toggle} />
    </>
  );
}
