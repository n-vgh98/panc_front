import { styled } from "@mui/material";

export const StyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const StyledBalance = styled("div")(({ theme }) => ({
  marginRight: 16,
  display: "flex",
  alignItems: "center",
  color: theme.palette.text.secondary,
  span: {
    fontSize: 18,
    fontWeight: 600,
  },
}));

export const StyledProfile = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#eff4f5",
  borderRadius: 16,
  boxShadow: "rgba(0, 0, 0, 0.1) 0px -2px 0px inset",
  cursor: "pointer",
  height: 32,
  paddingRight: 8,

  ">div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#faf9fa",
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    borderRadius: "50%",
    height: 32,
    width: 32,
    marginRight: 8,
    svg: {
      width: 24,
    },
  },
  ">span:first-of-type": {
    fontWeight: 600,
  },
  ">span:last-of-type": {
    transform: "rotate(90deg)",
    display: "inline-flex",
    marginLeft: 4,
    svg: {
      width: 24,
    },
  },
}));

export const StyledMenu = styled("ul")(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 16,
  minWidth: 250,
  position: "absolute",
  right: 0,
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  li: {
    width: "100%",
    ">a , >div": {
      padding: "12px 16px",
      width: "100%",
      color: theme.palette.text.secondary,
      fontWeight: 400,
      cursor: "pointer",
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
