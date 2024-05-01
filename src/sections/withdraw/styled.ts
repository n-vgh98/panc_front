import { styled } from "@mui/material";

export const StyledWrapper = styled("div")(({ theme }) => ({
  padding: "32px 32px 64px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
}));

export const StyledBox = styled("div")(({ theme }) => ({
  borderRadius: 24,
  minWidth: 320,
  maxWidth: 436,
  background: "#ffffff",
  padding: 24,
  border: `1px solid ${theme.palette.divider}`,

  h1: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.1,
    marginBottom: 15,
  },

  ">p": {
    color: theme.palette.text.secondary,
    fontSize: 14,
    marginBottom: 15,
  },
}));
