import { Divider } from "@mui/material";
import { StyledBox, StyledWrapper } from "./styled";
import DepositForm from "./deposit-form";

export default function Deposit() {
  return (
    <StyledWrapper>
      <StyledBox>
        <h1>Deposit</h1>
        <p>Deposit to your wallet</p>

        <Divider />

        <DepositForm />
      </StyledBox>
    </StyledWrapper>
  );
}
