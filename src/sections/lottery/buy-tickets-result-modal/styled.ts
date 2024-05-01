import { styled } from "@mui/material";

export const StyledContent = styled("div")(({ theme }) => ({
  ">div:first-of-type": {
    fontSize: 24,
    fontWeight: 600,
    color: theme.palette.success.main,
  },

  "[data-total-amount]": {
    marginTop: 16,
    display: "flex",
    justifyContent: "space-between",
    ">span:last-of-type": {
      fontSize: 20,
      fontWeight: 600,
    },
  },

  ">div:last-of-type": {
    marginTop: 32,
    fontSize: 18,
    ">span": {
      marginBottom: 16,
      display: "block",
    },
    ">div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
}));
