import { ButtonGroup, styled } from "@mui/material";

export const StyledButtonGroup = styled(({ type, ...props }: any) => (
  <ButtonGroup {...props} />
))(({ theme, type }) => ({
  border: type === "combine" ? `1px solid ${theme.palette.divider}` : 0,
  height: 36,
  backgroundColor: type === "combine" ? "#eff4f5" : "transparent",
  button: {
    margin: type === "combine" ? 0 : "0 4px",
    boxShadow: "none",
    border: 0,
    fontWeight: 600,
    borderRadius: "16px !important",
    fontSize: 16,
    flex: 1,
    "&:hover": {
      border: 0,
      boxShadow: "none",
    },

    "&.MuiButton-outlined": {
      backgroundColor: type === "combine" ? "transparent" : "#eff4f5",
    },
  },
}));
