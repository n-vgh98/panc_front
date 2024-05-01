import { styled } from "@mui/material";

export const StyledIntro = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  ">div": {
    fontSize: 20,
    color: theme.palette.secondary.main,
    fontWeight: 600,
  },
  ">img": {
    margin: "24px 0",
  },
}));
