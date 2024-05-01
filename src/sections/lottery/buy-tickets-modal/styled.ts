import { styled } from "@mui/material";

export const StyledLabel = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 8,
  ">span": {
    color: theme.palette.text.secondary,
  },
  ">div": {
    display: "flex",
    alignItesm: "center",
    fontWeight: 600,
    svg: {
      marginLeft: 4,
    },
  },
}));

export const StyledCost = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: theme.palette.text.secondary,
  fontSize: 14,
  marginBottom: 8,
}));

export const StyledDiscount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: theme.palette.text.secondary,
  fontSize: 14,
  marginBottom: 8,
  ">div": {
    display: "flex",
    alignItems: "center",
    ">span:first-of-type": {
      color: theme.palette.text.primary,
      fontWeight: 600,
      marginRight: 4,
    },
    ">span:last-of-type": {
      marginLeft: 4,
      display: "inline-flex",
      svg: {
        width: 16,
      },
    },
  },
}));

export const StyledPay = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: theme.palette.text.secondary,
  marginBottom: 24,
  ">span:last-of-type": {
    color: theme.palette.text.primary,
    fontWeight: 600,
  },
}));

export const StyledDescription = styled("div")(({ theme }) => ({
  fontSize: 13,
  color: theme.palette.text.secondary,
}));
