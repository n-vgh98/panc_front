import { styled } from "@mui/material";

export const StyledWrapper = styled("div")(({ theme }) => ({
  background: "linear-gradient(rgb(203, 215, 239) 0%, rgb(154, 159, 208) 100%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "72px 24px",
}));

export const StyledTop = styled("div")(({ theme }) => ({
  textAlign: "center",
  fontWeight: 600,
  margin: "0 0 48px",
  h3: {
    fontSize: 40,
    marginBottom: 24,
  },
  ">div": {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    ">div": {
      color: "#ffc700",
      fontSize: 40,
      lineHeight: "28px",
      span: {
        fontSize: 20,
        margin: "0 12px 0 4px",
      },
    },
    ">span": {
      fontSize: 20,
    },
  },
}));

export const StyledBox = styled("div")(({ theme }) => ({
  background: "#ffffff",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 24,
  overflow: "hidden",
}));

export const StyledBoxHead = styled("div")(({ theme }) => ({
  padding: "16px 24px",
  background: "linear-gradient(111.68deg,#f2ecf2,#e8f2f6)",
  display: "flex",
  alignItems: "center",
  span: {
    fontSize: 20,
    fontWeight: 600,
    marginRight: 16,
  },
}));

export const StyledWinningNumber = styled("div")(({ theme }) => ({
  padding: "24px",
  display: "flex",
  justifyContent: "space-between",
  ">span": {
    fontSize: 20,
    fontWeight: 600,
  },
}));

export const StyledInfo = styled("div")(({ theme }) => ({
  padding: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  ">div:first-of-type": {
    span: {
      fontSize: 20,
      fontWeight: 600,
    },
    div: {
      marginTop: 8,
      fontSize: 40,
      fontWeight: 600,
      color: theme.palette.secondary.main,
    },
  },
}));

export const StyledNumbers = styled("div")(({ theme }) => ({
  padding: "24px",
  background: "#faf9fa",
  p: {
    fontSize: 14,
    marginBottom: 24,
  },
  ">div": {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    rowGap: 24,
    columnGap: 12,
    ">div": {
      display: "flex",
      flexDirection: "column",
      ">div:first-of-type": {
        color: theme.palette.secondary.main,
        fontWeight: 600,
      },
      ">div:last-of-type": {
        fontWeight: 600,
        fontSize: 20,
      },
      ">span": {
        fontSize: 12,
        color: theme.palette.text.secondary,
      },
    },
  },
}));
