import { styled } from "@mui/material";

export const StyledWrapper = styled("div")(({ theme }) => ({
  backgroundColor: "#ffffff",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 24,
}));

export const StyledTable = styled("div")(({ theme }) => ({
  display: "grid",

  ">div": {
    display: "contents",

    ">div": {
      padding: "16px 8px",
      "&:first-of-type": {
        paddingLeft: 16,
      },
      "&:last-of-type": {
        paddingRight: 16,
      },
    },

    ">div[data-table-header]": {
      color: theme.palette.secondary.main,
      fontWeight: 600,
      textTransform: "uppercase",
      fontSize: 12,
      display: "flex",
      alignItems: "center",
      ">div": {
        position: "relative",
        boxShadow: "rgba(14, 14, 44, 0.4) 0px -1px 0px 0px inset",
        padding: "4px 8px",
        borderRadius: 8,
        width: 25,
        height: 25,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: "#eeeaf4",
        marginLeft: 5,
        cursor: "pointer",
        color: "#b4accf",
        ">svg": {
          width: 7,
          position: "absolute",
          "&:first-of-type": {
            top: 4,
            left: 5,
          },
          "&:last-of-type": {
            bottom: 4,
            right: 5,
            transform: "rotate(180deg)",
          },
        },

        "&[data-active=true]": {
          backgroundColor: theme.palette.text.secondary,
          ">svg[data-active=true]": {
            fill: "#ffffff",
          },
        },
      },
    },

    ">div[data-table-cell]": {
      borderTop: `1px solid ${theme.palette.divider}`,
    },
  },
}));

export const StyledNoData = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "24px 12px",
}));

export const StyledPagination = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px 0",
  borderTop: `1px solid ${theme.palette.divider}`,
  button: {
    color: theme.palette.primary.main,
    margin: "0 6px",
    "&:last-of-type": {
      transform: "rotate(180deg)",
    },
  },
}));
