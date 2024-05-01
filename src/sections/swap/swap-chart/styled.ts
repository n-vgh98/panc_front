import { ButtonGroup, styled } from "@mui/material";

export const StyledWrapper = styled("div")(({ theme }) => ({
  marginRight: 40,
  borderRadius: 24,
  background: "#ffffff80",
  padding: 24,
  border: `1px solid ${theme.palette.divider}`,
}));

export const StyledTop = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ">div": {
    display: "flex",
    alignItems: "center",
    fontWeight: 600,
    ">img": {
      marginRight: 4,
    },
    button: {
      width: 48,
      height: 48,
      svg: {
        transform: "rotate(90deg)",
        cursor: "pointer",
        fill: theme.palette.primary.main,
      },
    },
  },
  ">button": {
    width: 48,
    height: 48,
    svg: {
      cursor: "pointer",
    },
  },
}));

export const StyledValue = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  ">div": {
    display: "flex",
    flexDirection: "column",
    marginRight: 8,
    ">span:first-of-type": {
      fontSize: 40,
      fontWeight: 600,
      lineHeight: "48px",
    },
    ">span:last-of-type": {
      fontSize: 14,
      color: theme.palette.secondary.main,
    },
  },
  ">span:first-of-type": {
    fontSize: 20,
    fontWeight: 600,
    color: theme.palette.text.secondary,
  },
  ">span:last-of-type": {
    fontSize: 20,
    fontWeight: 600,
    marginLeft: 4,
  },
}));

export const StyledChart = styled("div")(({ theme }) => ({
  width: "100%",
  height: 300,
  marginTop: 40,
}));
