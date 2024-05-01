import { styled } from "@mui/material";

export const StyledLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  background: "linear-gradient(139.73deg,#e5fdff,#f3efff)",

  main: {
    flex: 1,
  },
}));
