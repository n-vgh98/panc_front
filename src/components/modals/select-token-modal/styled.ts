import { styled } from "@mui/material";

export const StyledRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  marginBottom: 14,

  ">.MuiAvatar-root": {
    marginRight: 8,
    width: 24,
    height: 24,
  },

  ">div": {
    display: "flex",
    flexDirection: "column",
    ">span:first-of-type": {
      fontWeight: 600,
    },
    ">span:last-of-type": {
      fontSize: 14,
      color: theme.palette.text.secondary,
      lineHeight: "14px",
    },
  },
}));
