import { keyframes, styled } from "@mui/material";

export const StyledConnected = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0 24px",
  padding: 24,
  border: `1px ${theme.palette.secondary.main} solid`,
  borderRadius: "0 0 16px 16px",
  background:
    "linear-gradient(rgba(202, 194, 236, 0.9) 0%, rgba(204, 220, 239, 0.9) 51.04%, rgba(206, 236, 243, 0.9) 100%)",
  borderTop: 0,

  ">div:first-of-type": {
    display: "flex",
    alignItems: "center",
    flex: 1,
    ".MuiAvatar-root": {
      width: 92,
      height: 92,
      marginRight: 24,
    },
  },
  ">div:last-of-type": {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ">div": {
      display: "flex",
      flexDirection: "column",
      ">span:first-of-type": {
        fontSize: 24,
        fontWeight: 600,
      },
      ">span:last-of-type": {
        color: theme.palette.text.secondary,
      },
    },
    a: {
      pointerEvents: "none",
      ".MuiButton-endIcon": {
        transform: "rotate(-90deg)",
      },
    },
  },
}));

export const StyledHero = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "48px 0 96px",

  ">div:first-of-type": {
    h2: {
      fontSize: 64,
      fontWeight: 600,
      color: theme.palette.secondary.main,
      lineHeight: 1.1,
    },
    p: {
      marginTop: 24,
      fontSize: 20,
      fontWeight: 600,
      lineHeight: 1.1,
    },
    ">div": {
      marginTop: 24,
      button: {
        marginRight: 8,
      },
    },
  },

  ">div:last-of-type": {
    animation: `${flyingAnim} 3.5s ease-in-out infinite`,
  },
}));

const flyingAnim = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`;
