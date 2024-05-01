import { keyframes, styled } from "@mui/material";

export const StyledWrapper = styled("div")(({ theme }) => ({
  background: "linear-gradient(rgb(118, 69, 217) 0%, rgb(69, 42, 122) 100%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#ffffff",
  position: "relative",

  "[data-bg]": {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "url(/images/decorations/bg-star.svg) center 0px no-repeat",
  },

  "[data-stars]": {
    position: "absolute",
    width: "100%",
    height: "100%",
    img: {
      position: "absolute",
      "&:nth-of-type(1)": {
        left: "19%",
        top: "42%",
        animation: `${floatingStarsLeft} 3s ease-in-out infinite`,
        animationDelay: "0.25s",
      },
      "&:nth-of-type(2)": {
        left: "25%",
        top: "23%",
        animation: `${floatingStarsLeft} 3.5s ease-in-out infinite`,
        animationDelay: "0.5s",
      },
      "&:nth-of-type(3)": {
        right: "19%",
        top: "24%",
        animation: `${floatingStarsRight} 4s ease-in-out infinite`,
        animationDelay: "0.75s",
      },
      "&:nth-of-type(4)": {
        left: "24%",
        top: "67%",
        animation: `${floatingTicketLeft} 6s ease-in-out infinite`,
        animationDelay: "0.2s",
      },
      "&:nth-of-type(5)": {
        right: "24%",
        top: "67%",
        animation: `${floatingTicketRight} 6s ease-in-out infinite`,
      },
    },
  },

  ">h2": {
    fontSize: 20,
    fontWeight: 600,
    marginTop: 96,
  },

  "[data-price]": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    ">span:first-of-type": {
      fontWeight: 600,
      fontSize: 64,
      color: "#ffc700",
    },
    ">span:last-of-type": {
      fontWeight: 600,
      fontSize: 24,
      marginBottom: 32,
    },
  },

  "[data-soon]": {
    fontSize: 40,
    fontWeight: 600,
  },

  ">div:last-of-type": {
    marginBottom: 96,
    position: "relative",
    width: 295,
    height: 137,
    animation: `${mainTicketAnimation} 3s ease-in-out infinite`,
    img: {
      width: 295,
      height: 137,
      position: "absolute",
      top: 0,
      left: 0,
      transform: "rotate(-4deg)",
    },
    button: {
      width: 242,
      height: 46,
      fontSize: 16,
      fontWeight: 600,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) rotate(-4deg)",
      background:
        "linear-gradient(rgb(118, 69, 217) 0%, rgb(69, 42, 122) 100%)",
      "&:disabled": {
        background: theme.palette.grey[500],
      },
    },
  },
}));

const mainTicketAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(6deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const floatingStarsLeft = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(10px, 10px);
  }
  to {
    transform: translate(0, -0px);
  }
`;

export const floatingStarsRight = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-10px, 10px);
  }
  to {
    transform: translate(0, -0px);
  }
`;

const floatingTicketLeft = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-10px, 15px);
  }
  to {
    transform: translate(0, -0px);
  }
`;

const floatingTicketRight = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(10px, 15px);
  }
  to {
    transform: translate(0, -0px);
  }
`;
