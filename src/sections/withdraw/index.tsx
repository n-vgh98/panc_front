import { Divider } from "@mui/material";
import { StyledBox, StyledWrapper } from "./styled";
import WithdrawForm from "./withdraw-form";

export default function Withdraw() {
  return (
    <StyledWrapper>
      <StyledBox>
        <h1>Withdraw</h1>
        <p>Withdraw from your wallet</p>

        <Divider />

        <WithdrawForm />
      </StyledBox>
    </StyledWrapper>
  );
}
