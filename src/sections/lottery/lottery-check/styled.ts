import { styled } from "@mui/material";

export const StyledWrapper = styled("div")(({ theme }) => ({
  background:
    "linear-gradient(139.73deg, rgb(49, 61, 92) 0%, rgb(61, 42, 84) 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "96px 24px",

  ">div": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 24px",
    ">div": {
      color: "#ffffff",
      fontWeight: 600,
      fontSize: 20,
      textAlign: "center",
      lineHeight: "22px",
    },
    button: {
      marginTop: 24,
      padding: "10px 37px",
      fontSize: 16,
      fontWeight: 600,
    },
  },
}));
