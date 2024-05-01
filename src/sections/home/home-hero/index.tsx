import ConnectWallet from "@/components/connect-wallet";
import Link from "@/components/link";
import useAuthStore from "@/store/useAuthStore";
import { Avatar, Box, Button } from "@mui/material";
import { StyledConnected, StyledHero } from "./styled";
import Image from "next/image";
import Container from "@/components/container";
import ArrowDown2Icon from "@/assets/icons/arrow-down-2.svg";
import { formatPrice } from "@/lib/numeral";

export default function HomeHero() {
  const user = useAuthStore((state) => state.user);

  return (
    <Box
      sx={{
        background: "linear-gradient(139.73deg,#e6fdff 0%,#f3efff 100%)",
      }}
    >
      <Container>
        {user && (
          <StyledConnected>
            <div>
              <Avatar />
              Connected with{" "}
              {`${user?.wallet_address?.substring(
                0,
                4
              )}...${user?.wallet_address?.slice(-4)}`}{" "}
            </div>
            <div>
              <div>
                <span>${formatPrice(user?.wallet_balance)}</span>
                <span>to collect</span>
              </div>
              <Link href="/farms">
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowDown2Icon />}
                  disabled
                >
                  Start Earning
                </Button>
              </Link>
            </div>
          </StyledConnected>
        )}

        <StyledHero>
          <div>
            <h2>The moon is made of pancakes.</h2>
            <p>
              Trade, earn, and win crypto on the most popular decentralized
              platform in the galaxy.
            </p>
            <div>
              {!user && <ConnectWallet size="large" />}
              <Link href="/swap">
                <Button size="large" variant="outlined">
                  Trade Now
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <Image
              src="/images/home/astronaut-bunny.png"
              width={512}
              height={512}
              alt="Astronaut Bunny"
            />
          </div>
        </StyledHero>
      </Container>
    </Box>
  );
}
