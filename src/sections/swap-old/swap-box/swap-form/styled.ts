import { TextField, styled } from "@mui/material";

export const StyledFormWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: 16,
}));

export const StyledToken = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: 6,
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

export const StyledTextField = styled(TextField)(({ theme }) => ({
  ".MuiInputBase-root": {
    flexDirection: "column",
    minHeight: 78,
    alignItems: "flex-end",
    input: {
      textAlign: "right",
    },
    ".MuiInputAdornment-root": {
      height: "unset",
      maxHeight: "unset",
      p: {
        color: theme.palette.text.secondary,
        lineHeight: 1.5,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: 12,
      },
    },
  },
}));

export const StyledLowRisk = styled("div")(({ theme }) => ({
  marginTop: 8,
  display: "flex",
  justifyContent: "flex-end",
  ".MuiChip-root": {
    height: 28,
    ".MuiChip-label": {
      display: "flex",
      alignItems: "center",
      fontWeight: 600,
      fontSize: 14,
      svg: {
        marginLeft: 4,
        fill: "#ffffff",
      },
    },
  },
}));

export const StyledSwitch = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  margin: "24px 0 16px",
  button: {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px -2px 0px inset",
    transition: theme.transitions.create("background-color"),
    height: 32,
    width: 32,
    backgroundColor: "#eeeaf4",
    svg: {
      minWidth: 20,
    },
    "svg:first-of-type": {
      fill: theme.palette.primary.main,
    },
    "svg:last-of-type": {
      display: "none",
      fill: "#ffffff",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "svg:first-of-type": {
        display: "none",
      },
      "svg:last-of-type": {
        display: "block",
      },
    },
  },
}));

export const StyledPrice = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 16,
  ">span": {
    color: theme.palette.secondary.main,
    fontWeight: 600,
    fontSize: 12,
  },
  ">div": {
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    svg: {
      width: 14,
      margin: "0 4px",
      "&:first-of-type": {
        transform: "rotate(90deg)",
      },
      "&:last-of-type": {
        cursor: "pointer",
        marginLeft: 8,
      },
    },
  },
}));

export const StyledTolerance = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 16,

  ">div": {
    color: theme.palette.secondary.main,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    svg: {
      width: 24,
      fill: theme.palette.primary.main,
      padding: 6,
      cursor: "pointer",
    },
  },
  ">span": {
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: 16,
  },
}));

export const StyledInfos = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 32,
  ">div": {
    marginBottom: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ">div:first-of-type": {
      color: theme.palette.text.secondary,
      fontSize: 14,
      display: "flex",
      alignItems: "center",
      ">span:last-of-type": {
        display: "inline-flex",
        svg: {
          marginLeft: 4,
          width: 16,
          fill: "currentColor",
        },
      },
    },
    ">div:last-of-type": {
      fontSize: 14,
    },

    "&:nth-of-type(2)": {
      ">div:last-of-type": {
        color: theme.palette.success.main,
      },
    },
    "&:nth-of-type(4)": {
      ">div:last-of-type": {
        color: theme.palette.text.secondary,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        svg: {
          fill: "currentColor",
          margin: "0 4px",
          "&:first-of-type": {
            width: 12,
          },
          "&:last-of-type": {
            width: 16,
          },
        },
      },
    },
  },
}));
