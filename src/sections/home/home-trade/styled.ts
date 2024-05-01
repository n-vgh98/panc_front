import { keyframes, styled } from "@mui/material";

export const StyledHero = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "48px 0",
  ">div:first-of-type": {
    flex: 1,
    h3: {
      fontSize: 40,
      fontWeight: 600,
      lineHeight: 1.1,
      span: {
        color: theme.palette.secondary.main,
      },
    },
    p: {
      marginTop: 24,
      lineHeight: 1.5,
      color: theme.palette.text.secondary,
    },
    ">div": {
      marginTop: 24,
      button: {
        marginRight: 8,
      },
    },
  },

  ">div:last-of-type": {
    flex: 1,
    div: {
      width: 428,
      height: 428,
      margin: "0 auto",
      position: "relative",
      img: {
        "&:nth-of-type(1)": {
          animation: `${floatingAnim(
            "3px",
            "15px"
          )} 3s 1s ease-in-out infinite`,
        },
        "&:nth-of-type(2)": {
          animation: `${floatingAnim(
            "5px",
            "10px"
          )} 3s .66s ease-in-out infinite`,
        },
        "&:nth-of-type(3)": {
          animation: `${floatingAnim(
            "6px",
            "5px"
          )} 3s .33s ease-in-out infinite`,
        },
      },
    },
  },
}));

const floatingAnim = (x: string, y: string) => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(${x}, ${y});
  }
  to {
    transform: translate(0, 0px);
  }
`;
