import { styled } from "@mui/material";

export const StyledWrapper = styled("div")(({ theme }) => ({
  padding: "48px 0 96px",
  backgroundColor: "#ffffff",
}));

export const StyledSteps = styled("div")(({ theme }) => ({
  ">div:first-of-type": {
    fontSize: 40,
    fontWeight: 600,
    color: theme.palette.secondary.main,
    textAlign: "center",
  },
  ">p": {
    marginTop: 24,
    lineHeight: 1.5,
    textAlign: "center",
  },
  ">div:last-of-type": {
    marginTop: 40,
    display: "flex",
    ">div": {
      flex: 1,
      borderRadius: 16,
      padding: 24,
      border: `1px solid ${theme.palette.divider}`,
      ">span": {
        display: "block",
        textAlign: "right",
        fontSize: 12,
        fontWeight: 600,
      },
      ">div": {
        marginTop: 16,
        fontSize: 24,
        fontWeight: 600,
        color: theme.palette.secondary.main,
        lineHeight: 1.1,
      },
      ">p": {
        marginTop: 24,
        lineHeight: 1.5,
        color: theme.palette.text.secondary,
      },
      "&:not(:last-of-type)": {
        marginRight: 24,
      },
    },
  },
}));

export const StyledCriteria = styled("div")(({ theme }) => ({
  ">div:first-of-type": {
    "strong , div": {
      marginBottom: 24,
    },
    "p:first-of-type": {
      marginBottom: 16,
    },
    "p:last-of-type": {
      marginTop: 16,
    },
    strong: {
      display: "block",
      fontSize: 24,
      fontWeight: 600,
      color: theme.palette.secondary.main,
      lineHeight: 1.1,
    },
    div: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.1,
    },
    p: {
      lineHeight: 1.5,
      color: theme.palette.text.secondary,
      span: {
        width: 4,
        height: 4,
        backgroundColor: theme.palette.text.secondary,
        borderRadius: 4,
        marginRight: 4,
        display: "inline-block",
        position: "relative",
        top: -3,
      },
    },
  },

  ">div:last-of-type": {},
}));

export const StyledPrizeFunds = styled("div")(({ theme }) => ({
  ">div:first-of-type": {
    strong: {
      display: "block",
      fontSize: 24,
      fontWeight: 600,
      color: theme.palette.secondary.main,
      lineHeight: 1.1,
      marginBottom: 24,
    },
    div: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.1,
      margin: "16px 0",
    },
    p: {
      lineHeight: 1.5,
      color: theme.palette.text.secondary,
      span: {
        width: 4,
        height: 4,
        backgroundColor: theme.palette.text.secondary,
        borderRadius: 4,
        marginRight: 4,
        display: "inline-block",
        position: "relative",
        top: -3,
      },
      a: {
        color: theme.palette.primary.main,
        fontWeight: 600,
      },
    },
  },

  ">div:last-of-type": {},
}));

export const StyledStill = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ">div": {
    div: {
      fontSize: 20,
      fontWeight: 600,
      marginBottom: 8,
    },
    span: {
      lineHeight: 1.5,
      a: {
        fontWeight: 600,
        color: theme.palette.primary.main,
      },
    },
  },
}));
