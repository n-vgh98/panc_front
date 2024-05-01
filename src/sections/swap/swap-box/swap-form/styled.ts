import { styled } from "@mui/material";

export const StyledFormWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: 16,
}));

export const StyledLowRisk = styled("div")(({ theme }) => ({
  marginTop: 8,
  display: "flex",
  justifyContent: "flex-end",
  ".MuiChip-root": {
    height: 28,
    ".MuiChip-label": {
      display: "flex",
      alignItems: "center",
      fontWeight: 600,
      fontSize: 14,
      svg: {
        marginLeft: 4,
        fill: "#ffffff",
      },
    },
  },
}));

export const StyledTolerance = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  ">div": {
    color: theme.palette.secondary.main,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: 12,
    display: "flex",
    alignItems: "center",
  },
  ">span": {
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: 16,
  },
}));
