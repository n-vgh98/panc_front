import { Dialog, styled } from "@mui/material";

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  ".MuiDialog-paper": {
    ">h2": {
      display: "flex",
      alignItems: "center",
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: "12px 24px",
      fontSize: 20,
      fontWeight: 600,
      span: {
        flex: 1,
      },
      button: {
        width: 48,
        height: 48,
        svg: {
          cursor: "pointer",
        },
      },
    },
    ">div": {
      padding: 24,
      maxHeight: "75vh",
      overflow: "auto",
    },
  },
}));
