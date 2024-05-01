import { styled } from "@mui/material";

export const StyledHeader = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 56,
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: "0 16px",
  backgroundColor: "#ffffff",
  position: "fixed",
  left: 0,
  right: 0,
  top: 0,
  zIndex: 1,

  ">div:first-of-type": {
    display: "flex",
    alignItems: "center",
  },
}));

export const StyledFiller = styled("div")(({ theme }) => ({
  minHeight: 56,
  maxHeight: 56,
}));

export const StyledNav = styled("nav")(({ theme }) => ({
  marginLeft: 24,

  ul: {
    display: "flex",
    alignItems: "center",
  },
}));
