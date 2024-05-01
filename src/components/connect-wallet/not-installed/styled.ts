import { styled } from "@mui/material";

export const StyledNotInstalled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%",
  ">div": {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: 600,
  },
}));
