import { styled } from "@mui/material";

export const StyledLink = styled("div")(({ theme }) => ({
  a: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: "0px 16px",
    height: 48,
    borderRadius: 16,
    color: theme.palette.text.secondary,
    fontWeight: 400,
    "&[data-active=true]": {
      color: theme.palette.secondary.main,
      fontWeight: 600,
    },
    "&[data-disabled=true]": {
      color: theme.palette.grey[300],
      pointerEvents: "none",
    },

    "&:hover": {
      backgroundColor: "#eff4f5",
    },
  },
}));

export const StyledMenu = styled("ul")(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 16,
  minWidth: 250,
  position: "absolute",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  li: {
    width: "100%",
    a: {
      padding: "12px 16px",
      width: "100%",
      color: theme.palette.text.secondary,
      fontWeight: 400,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "&[data-active=true]": {
        color: theme.palette.secondary.main,
        fontWeight: 600,
      },
      "&[data-disabled=true]": {
        color: theme.palette.grey[300],
        pointerEvents: "none",
      },
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
    },
  },
  hr: {
    margin: 0,
    width: "100%",
  },
}));
