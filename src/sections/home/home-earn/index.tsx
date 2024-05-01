import Link from "@/components/link";
import { Box, Button } from "@mui/material";
import { StyledHero } from "./styled";
import Image from "next/image";
import Container from "@/components/container";
import ExternalIcon from "@/assets/icons/external.svg";

export default function HomeEarn() {
  return (
    <Box
      sx={{
        background: "linear-gradient(111.68deg,#f2ecf2,#e8f2f6)",
      }}
    >
      <Container>
        <StyledHero>
          <div>
            <div>
              <Image src="/images/home/pie.png" fill alt="pie" />
              <Image src="/images/home/stonks.png" fill alt="stonks" />
              <Image src="/images/home/folder.png" fill alt="folder" />
            </div>
          </div>

          <div>
            <h3>
              <span>Earn</span> passive income with crypto.
            </h3>
            <p>PancakeSwap makes it easy to make your crypto work for you.</p>
            <div>
              <Link href="/swap">
                <Button size="large" variant="contained">
                  Explore
                </Button>
              </Link>
              <a href="https://docs.pancakeswap.finance/" target="_blank">
                <Button size="large" endIcon={<ExternalIcon />}>
                  Learn
                </Button>
              </a>
            </div>
          </div>
        </StyledHero>
      </Container>
    </Box>
  );
}
