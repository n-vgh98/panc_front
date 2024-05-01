import { styled } from "@mui/material";

export const StyledWrapper = styled("div")(({ theme }) => ({
  ">label": {
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    marginBottom: 6,
  },
}));
