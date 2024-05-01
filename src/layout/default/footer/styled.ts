import { styled } from "@mui/material";

export const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: "#27262c",
  padding: "56px 40px 32px",
}));

export const StyledList = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  ">div": {
    display: "flex",
    flexDirection: "column",
    ">div": {
      color: theme.palette.secondary.main,
      fontWeight: 600,
      padding: 8,
    },
    ">a": {
      color: "#ffffff",
      padding: 8,
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  ">a": {
    padding: 8,
    alignSelf: "flex-start",
  },
}));

export const StyledSocial = styled("div")(({ theme }) => ({
  padding: 8,
  marginTop: 16,
  display: "flex",
  alignItems: "center",
  color: theme.palette.text.secondary,
  svg: {
    marginRight: 16,
    color: theme.palette.text.secondary,
  },
}));
