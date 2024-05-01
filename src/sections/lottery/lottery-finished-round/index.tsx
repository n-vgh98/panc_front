import {
  StyledBox,
  StyledBoxHead,
  StyledInfo,
  StyledNumbers,
  StyledTop,
  StyledWinningNumber,
  StyledWrapper,
} from "./styled";
import useModal from "@/hooks/useModal";
import BuyTicketsModal from "../buy-tickets-modal";
import { Box, Button, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import { Collapse } from "@mui/material";
import { getPreviousRoundApi } from "@/apis/lottery";
import TicketNumber from "@/components/ticket-number";
import { formatPrice } from "@/lib/numeral";

export default function LotteryFinishedRound() {
  const [open, toggle] = useModal();
  const [showDetail, setShowDetail] = useState(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    handleGetRound();
  }, []);

  const handleGetRound = async () => {
    try {
      const res = await getPreviousRoundApi();
      setData(res.data?.data);
    } catch (error) {}
  };

  return (
    <>
      <StyledWrapper>
        <StyledTop>
          <h3>Previous Round</h3>
        </StyledTop>

        <StyledBox>
          <StyledBoxHead>
            <span>Round</span>
            <div>#{data?.round_number}</div>
          </StyledBoxHead>

          <StyledWinningNumber>
            <span>Winning Number</span>
            <TicketNumber number={data?.ticket_goal} />
          </StyledWinningNumber>

          <Divider />

          <Collapse in={showDetail}>
            <Box display="flex">
              <StyledInfo>
                <div>
                  <span>Prize pot</span>
                  <div>~${formatPrice(data?.total_price)}</div>
                </div>
                <div>Total players this round: {data?.ticket_count}</div>
              </StyledInfo>
              <StyledNumbers>
                <p>
                  Match the winning number in the same order to share prizes.
                </p>

                <div>
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i}>
                      <div>Match first {i}</div>
                      <div>{data?.[`win_${i}`]?.count}</div>
                      <span>
                        ~${formatPrice(data?.[`win_${i}`]?.total_amount)}
                      </span>
                    </div>
                  ))}
                </div>
              </StyledNumbers>
            </Box>
          </Collapse>

          <Box
            sx={{
              display: "flex",
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
