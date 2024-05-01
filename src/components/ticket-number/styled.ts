import { Box, styled } from "@mui/material";

export const StyledNumber = styled(Box)(({ theme }) => ({
  display: "flex",
  marginLeft: 24,
  ">div": {
    marginRight: 8,
    position: "relative",
    width: 70,
    height: 70,
    svg: {
      postion: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
    },

    span: {
      position: "absolute",
      zIndex: 1,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#000000",
      textShadow:
        "white -0.75px -0.75px 0px, white 0.75px -0.75px 0px, white -0.75px 0.75px 0px, white 0.75px 0.75px 0px",
      fontSize: 42,
      fontWeight: 600,
    },
    "&:nth-of-type(1)": {
      span: {
        transform: `translate(-50%, -50%) rotate(15deg)`,
      },
    },
    "&:nth-of-type(2)": {
      span: {
        transform: `translate(-50%, -50%) rotate(-15deg)`,
      },
    },
    "&:nth-of-type(3)": {
      span: {
        transform: `translate(-50%, -50%) rotate(25deg)`,
      },
    },
    "&:nth-of-type(4)": {
      span: {
        transform: `translate(-50%, -50%) rotate(-25deg)`,
      },
    },
    "&:nth-of-type(5)": {
      span: {
        transform: `translate(-50%, -50%) rotate(5deg)`,
      },
    },
    "&:nth-of-type(6)": {
      span: {
        transform: `translate(-50%, -50%) rotate(-5deg)`,
      },
    },
  },
}));
