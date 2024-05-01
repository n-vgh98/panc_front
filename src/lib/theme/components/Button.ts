const Button = {
  MuiButtonBase: {
    styleOverrides: {
      root: {
        "&.MuiButtonBase-root": {
          textTransform: "none",
        },
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        boxShadow: "rgba(0,0,0,0.2) 0px -1px 0px 0px inset",
        "&:hover": {
          boxShadow: "rgba(0,0,0,0.2) 0px -1px 0px 0px inset",
        },
        "&.MuiButton-outlined": {
          boxShadow: "none",
          borderWidth: 2,
          "&:hover": {
            boxShadow: "none",
          },
        },
        "&.MuiButton-text": {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },

  MuiButtonGroup: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        boxShadow: "none",
      },
    },
  },
};

export default Button;
