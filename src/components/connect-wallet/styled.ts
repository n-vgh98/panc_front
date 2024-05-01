import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: "0.48px",
  fontSize: "100%",
}));

export const StyledSelectWallet = styled("div")(({ theme }) => ({
  flex: 1,
  padding: 32,
  ">strong": {
    fontSize: 20,
    fontWeight: 600,
  },
  ">p": {
    fontSize: 14,
    margin: "24px 0 32px",
    color: theme.palette.text.secondary,
  },
  ".MuiGrid-item": {
    ">div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      span: {
        fontSize: 12,
        marginTop: 4,
      },
    },
  },
}));

export const StyledInstalled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  ">div:first-of-type": {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: 600,
    margin: "24px 0",
  },

  ">[data-conflict]": {
    color: theme.palette.warning.main,
    marginTop: 8,
    svg: {
      position: "relative",
      top: 4,
      marginRight: 4,
    },
  },
}));
