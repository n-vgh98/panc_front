import {
  StyledBox,
  StyledBoxHead,
  StyledInfo,
  StyledNumbers,
  StyledTop,
  StyledWrapper,
} from "./styled";
import useModal from "@/hooks/useModal";
import BuyTicketsModal from "../buy-tickets-modal";
import { Box, Button, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import { Collapse } from "@mui/material";
import { getCurrentRoundApi } from "@/apis/lottery";
import useLottery from "../lottery-context";
import { formatPrice } from "@/lib/numeral";

export default function LotteryDraw() {
  const { currentRound } = useLottery();
  const [open, toggle] = useModal();
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <StyledWrapper>
        <StyledTop>
          <h3>Get your tickets now!</h3>
          {/* <div>
            <div>
              1<span>d</span>9<span>h</span>
              16
              <span>m</span>
            </div>
            <span>until the draw</span>
          </div> */}
        </StyledTop>

        <StyledBox>
          <StyledBoxHead>
            <span>Next Draw</span>
            <div>#{currentRound?.round_number}</div>
          </StyledBoxHead>

          <StyledInfo>
            <div>Prize Pot</div>
            <div>
              <span>~${formatPrice(currentRound?.total_price)}</span>
              {/* <span>16,025 CAKE</span> */}
            </div>
            <div>Your tickets</div>
            <div>
              <Button variant="contained" size="large" onClick={() => toggle()}>
                Buy Tickets
              </Button>
            </div>
          </StyledInfo>

          <Divider />

          <Collapse in={showDetail}>
            <StyledNumbers>
              <p>
                Match the winning number in the same order to share prizes.
                Current prizes up for grabs:
              </p>

              <div>
                {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
                  <div key={i}>
                    <div>Match first 1</div>
                    <div>321 CAKE</div>
                    <span>~$470</span>
                  </div>
                ))}
              </div>
            </StyledNumbers>
          </Collapse>

          <Box
            sx={{
              display: "none",
              justifyContent: "center",
            }}
          >
            <Box
              onClick={() => setShowDetail(!showDetail)}
              sx={{
                display: "flex",
                alignItems: "center",
                color: "primary.main",
                cursor: "pointer",
                padding: "20px",
                fontWeight: 600,
              }}
            >
              {showDetail ? "Hide" : "Details"}
              <ArrowRightIcon
                style={{
                  transform: `rotate(${showDetail ? -90 : 90}deg)`,
                  marginLeft: "8px",
                }}
              />
            </Box>
          </Box>
        </StyledBox>
      </StyledWrapper>

      <BuyTicketsModal open={open} toggle={toggle} />
    </>
  );
}
