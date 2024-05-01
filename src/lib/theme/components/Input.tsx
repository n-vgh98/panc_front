const Input = {
  MuiTextField: {
    styleOverrides: {
      root: {
        ".MuiInputBase-root": {
          padding: "12px 16px",
          backgroundColor: "#eeeaf4",
          borderRadius: 16,
          "input , textarea": {
            padding: 0,
          },
          fieldset: {
            boxShadow: "inset 0px 2px 2px -1px rgba(74,74,104,.1)",
            border: "1px solid #d7caec",
          },

          "&:hover": {
            fieldset: {
              border: "1px solid #d7caec",
            },
          },
          "&.Mui-focused": {
            fieldset: {
              boxShadow:
                "0px 0px 0px 1px #7645d9,0px 0px 0px 4px rgba(118,69,217,.6)",
              border: 0,
            },
          },
        },
      },
    },
  },

  MuiCheckbox: {
    styleOverrides: {
      root: {
        ">div": {
          height: 24,
          width: 24,
          borderRadius: 8,
          backgroundColor: "#e7e3eb",
          boxShadow: "inset 0px 2px 2px -1px rgba(74,74,104,.1)",
          position: "relative",
          transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        "&.Mui-checked": {
          ">div": {
            backgroundColor: "#31d0aa",
            "&::after": {
              content: "''",
              position: "absolute",
              borderBottom: "2px solid transparent",
              borderLeft: "2px solid transparent",
              borderTopColor: "transparent",
              borderRightColor: "transparent",
              borderColor: "white",
              top: "30%",
              left: 0,
              right: 0,
              width: "50%",
              height: "25%",
              margin: "auto",
              transform: "rotate(-50deg)",
              transition: "border-color 0.2s ease-in-out 0s",
            },
          },
        },
      },
    },
    defaultProps: {
      icon: <div></div>,
      checkedIcon: <div></div>,
    },
  },

  MuiSwitch: {
    styleOverrides: {
      root: {
        width: 56,
        height: 32,
        padding: 0,
        borderRadius: 24,
        ".MuiSwitch-switchBase": {
          padding: 3,
          "&.Mui-checked": {
            color: "#fff",
            transform: "translateX(24px)",
            "+.MuiSwitch-track": {
              backgroundColor: "#31d0aa",
            },
          },
        },
        ".MuiSwitch-thumb": {
          width: 26,
          height: 26,
        },
        ".MuiSwitch-track": {
          opacity: "1 !important",
          backgroundColor: "#eeeaf4",
        },
      },
    },
  },
};

export default Input;
