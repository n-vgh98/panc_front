import { styled } from "@mui/material";

export const StyledTop = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "120px 0 0",
  ">div": {
    marginTop: 24,
    fontSize: 40,
    fontWeight: 600,
    lineHeight: 1.1,
  },
  ">p": {
    marginTop: 24,
    color: theme.palette.text.secondary,
  },
  ">span": {
    marginTop: 24,
    color: theme.palette.text.secondary,
    fontWeight: 600,
  },
}));

export const StyledBoxes = styled("div")(({ theme }) => ({
  margin: "32px auto 0",
  paddingBottom: 96,
  display: "flex",
  width: "80%",
  ">div": {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    margin: "0 8px",
    flex: 1,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    "&:nth-of-type(1)": {
      color: theme.palette.secondary.main,
    },
    "&:nth-of-type(2)": {
      color: theme.palette.primary.main,
    },
    "&:nth-of-type(3)": {
      color: theme.palette.error.main,
    },
    ">span": {
      display: "flex",
      justifyContent: "flex-end",
      svg: {
        width: 36,
      },
    },
    ">div": {
      fontSize: 40,
      fontWeight: 600,
      lineHeight: 1.1,
      "&:first-of-type": {
        marginTop: 64,
        color: theme.palette.text.primary,
      },
      "&:last-of-type": {
        color: "inherit",
      },
    },
    ">p": {
      color: theme.palette.text.secondary,
      marginTop: 24,
    },
  },
}));
