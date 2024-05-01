import { ButtonGroup, styled } from "@mui/material";

export const StyledWrapper = styled("div")(({ theme }) => ({
  marginRight: 40,
  borderRadius: 24,
  background: "#ffffff80",
  padding: 24,
  border: `1px solid ${theme.palette.divider}`,
}));
