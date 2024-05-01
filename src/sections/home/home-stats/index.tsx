import Container from "@/components/container";
import { Box } from "@mui/material";
import Image from "next/image";
import UsersIcon from "@/assets/icons/users.svg";
import TradeIcon from "@/assets/icons/trade.svg";
import ChartIcon from "@/assets/icons/chart.svg";
import { StyledBoxes, StyledTop } from "./styled";

export default function HomeStats() {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg,#fff 22%,#d7caec 100%)",
      }}
    >
      <Container>
        <StyledTop>
          <Image
            src="/images/pancake-blue.svg"
            width={48}
            height={48}
            alt="Pancake"
          />
          <div>
            Used by millions.
            <br />
            Trusted with billions.
          </div>
          <p>
            PancakeSwap has the most users of any decentralized platform, ever.
            <br />
            And those users are now entrusting the platform with over $1.6
            billion in funds.
          </p>
          <span>Will you join them?</span>
        </StyledTop>

        <StyledBoxes>
          <div>
            <span>
              <UsersIcon />
            </span>
            <div>1.5 million</div>
            <div>users</div>
            <p>in the last 30 days</p>
          </div>
          <div>
            <span>
              <TradeIcon />
            </span>
            <div>17 million</div>
            <div>trades</div>
            <p>made in the last 30 days</p>
          </div>
          <div>
            <span>
              <ChartIcon />
            </span>
            <div>$1.6 billion</div>
            <div>staked</div>
            <p>Total Value Locked</p>
          </div>
        </StyledBoxes>
      </Container>
    </Box>
  );
}
