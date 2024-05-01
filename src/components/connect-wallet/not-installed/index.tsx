import { Button } from "@mui/material";
import { StyledNotInstalled } from "./styled";

export default function NotInstalled({ wallet }) {
  return (
    <StyledNotInstalled>
      <div>{wallet.title} in not installed</div>
      <Button
        variant="contained"
        color="deluge"
        size="large"
        component="a"
        href={wallet.downloadLink}
        target="_blank"
      >
        Install
      </Button>
    </StyledNotInstalled>
  );
}
