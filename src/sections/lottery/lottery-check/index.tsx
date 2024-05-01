import { Button } from "@mui/material";
import { StyledWrapper } from "./styled";
import ConnectWallet from "@/components/connect-wallet";
import { useState } from "react";
import useAuthStore from "@/store/useAuthStore";
import TicketsListModal from "@/components/modals/tickets-list-modal";
import useModal from "@/hooks/useModal";

export default function LotteryCheck() {
  const [status, setStatus] = useState("");
  const user = useAuthStore((state) => state.user);
  const [openTickets, toggleTickets] = useModal();

  return (
    <>
      <StyledWrapper>
        {status === "not-winner" ? (
          <img
            src="/images/lottery/torn-ticket-l.png"
            alt="torn lottery ticket"
            width="84"
          />
        ) : (
          <img
            src="/images/lottery/ticket-l.png"
            alt="lottery ticket"
            width="119"
            height="100"
          />
        )}

        {!user ? (
          <div>
            <div>
              Connect your wallet
              <br />
              to check if you've won!
            </div>
            <ConnectWallet />
          </div>
        ) : !status ? (
          <div>
            <div>Are you a winner?</div>
            <Button variant="contained" onClick={() => toggleTickets()}>
              Check Now
            </Button>
          </div>
        ) : status === "not-winner" ? (
          <div>
            <div>
              No prizes to collect...
              <br />
              Better luck next time!
            </div>
          </div>
        ) : null}

        {status === "not-winner" ? (
          <img
            src="/images/lottery/torn-ticket-r.png"
            alt="torn lottery ticket"
            width="84"
          />
        ) : (
          <img
            src="/images/lottery/ticket-r.png"
            alt="lottery ticket"
            width="109"
            height="100"
          />
        )}
      </StyledWrapper>

      <TicketsListModal open={openTickets} toggle={toggleTickets} />
    </>
  );
}
