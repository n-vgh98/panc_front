const Tooltip = {
  MuiTooltip: {
    styleOverrides: {
      popper: {
        ".MuiTooltip-tooltip": {
          backgroundColor: "#191326",
          fontSize: 16,
          fontWeight: 400,
          padding: 16,
          borderRadius: 16,

          ".MuiTooltip-arrow": {
            color: "#08060b",
          },
        },
      },
    },

    defaultProps: {
      arrow: true,
    },
  },
};

export default Tooltip;
