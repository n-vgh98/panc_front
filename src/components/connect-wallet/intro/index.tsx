import { Button } from "@mui/material";
import { StyledIntro } from "./styled";
import Image from "next/image";
import ExternalIcon from "@/assets/icons/external.svg";

export default function Intro() {
  return (
    <StyledIntro>
      <div>Haven’t got a wallet yet?</div>
      <Image
        src="/images/wallet_intro.png"
        width={198}
        height={178}
        alt="Wallet Intro"
      />
      <Button
        variant="contained"
        color="deluge"
        size="large"
        endIcon={<ExternalIcon />}
      >
        Learn How to Connect
      </Button>
    </StyledIntro>
  );
}
