import { styled } from "@mui/material";

export const StyledTitle = styled("div")(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 600,
  fontSize: 12,
}));

export const StyledSpeed = styled("div")(({ theme }) => ({
  marginBottom: 24,
  ">div:first-of-type": {
    marginBottom: 12,
    display: "flex",
    alignItems: "center",
    span: {
      marginLeft: 4,
      display: "inline-flex",
      color: theme.palette.text.secondary,
      svg: {
        width: 16,
      },
    },
  },
}));

export const StyledTolerance = styled("div")(({ theme }) => ({
  marginBottom: 24,
  ">div:first-of-type": {
    marginBottom: 12,
    display: "flex",
    alignItems: "center",
    span: {
      marginLeft: 4,
      display: "inline-flex",
      color: theme.palette.text.secondary,
      svg: {
        width: 16,
      },
    },
  },
}));

export const StyledRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 24,
  ">div:first-of-type": {
    display: "flex",
    alignItems: "center",
    span: {
      marginLeft: 4,
      display: "inline-flex",
      color: theme.palette.text.secondary,
      svg: {
        width: 16,
      },
    },
  },
}));
