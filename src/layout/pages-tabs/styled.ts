import { Tabs, styled } from "@mui/material";

export const StyledLayout = styled("div")(({ theme }) => ({}));

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: "unset",
  height: 42,
  backgroundColor: "#ffffff",
  ".MuiTabs-flexContainer": {
    height: "100%",
    button: {
      minHeight: "unset",
      minWidth: "unset",
      padding: 0,
      marginRight: 20,
      a: {
        padding: "4px 4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        color: theme.palette.text.secondary,
        fontWeight: 400,
        fontSize: 16,

        "&:hover": {
          backgroundColor: "#eff4f5",
        },
      },
      "&.Mui-selected": {
        a: {
          color: theme.palette.secondary.main,
          fontWeight: 600,
        },
      },
      "&.Mui-disabled": {
        a: {
          color: theme.palette.grey[300],
        },
      },
    },
  },

  ".MuiTabs-indicator": {
    height: 4,
    borderRadius: "2px 2px 0px 0px",
  },
}));
