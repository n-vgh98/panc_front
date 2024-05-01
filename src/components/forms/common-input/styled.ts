import { styled } from "@mui/material";

export const StyledBox = styled("div")(({ theme }) => ({
  ".MuiInputBase-root": {
    flexDirection: "column",
    minHeight: 78,
    alignItems: "flex-end",
    input: {
      direction: "rtl",
    },
    ".MuiInputAdornment-root": {
      height: "unset",
      maxHeight: "unset",
      color: theme.palette.text.secondary,
      lineHeight: 1.5,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      fontSize: 12,
      p: {
        fontSize: "inherit",
      },
    },
  },
}));
