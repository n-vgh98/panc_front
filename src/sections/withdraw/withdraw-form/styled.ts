import { styled } from "@mui/material";

export const StyledFormWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: 16,
}));

export const StyledTokenFrom = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: 6,
  img: {
    marginRight: 8,
  },
  span: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: 16,
  },
}));
export const StyledTokenTo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 6,
  marginTop: 32,
  ">div": {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    img: {
      marginRight: 8,
    },
    span: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: 16,
    },
  },
  ">svg": {
    cursor: "pointer",
    width: 16,
    fill: theme.palette.text.secondary,
    marginLeft: 6,
  },
}));
