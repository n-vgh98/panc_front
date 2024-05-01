import Link from "@/components/link";
import { Box, Button } from "@mui/material";
import { StyledHero } from "./styled";
import Image from "next/image";
import Container from "@/components/container";
import ExternalIcon from "@/assets/icons/external.svg";

export default function HomeTrade() {
  return (
    <Box>
      <Container>
        <StyledHero>
          <div>
            <h3>
              <span>Trade</span> anything. No registration, no hassle.
            </h3>
            <p>
              Trade any token on BNB Smart Chain in seconds, just by connecting
              your wallet.
            </p>
            <div>
              <Link href="/swap">
                <Button size="large" variant="contained">
                  Trade Now
                </Button>
              </Link>
              <a href="https://docs.pancakeswap.finance/" target="_blank">
                <Button size="large" endIcon={<ExternalIcon />}>
                  Learn
                </Button>
              </a>
            </div>
          </div>

          <div>
            <div>
              <Image src="/images/home/BNB.png" fill alt="BNB" />
              <Image src="/images/home/BTC.png" fill alt="BTC" />
              <Image src="/images/home/CAKE.png" fill alt="CAKE" />
            </div>
          </div>
        </StyledHero>
      </Container>
    </Box>
  );
}
