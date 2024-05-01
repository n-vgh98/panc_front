import Modal from "@/components/modal";
import { Box, Switch, TextField, Tooltip } from "@mui/material";
import HelpIcon from "@/assets/icons/help.svg";
import ButtonGroup from "@/components/button-group";
import { StyledRow, StyledSpeed, StyledTitle, StyledTolerance } from "./styled";

type SwapSettingModalProps = {
  open: boolean;
  toggle: () => void;
};

export default function SwapSettingModal({
  open,
  toggle,
}: SwapSettingModalProps) {
  return (
    <Modal open={open} onClose={toggle} title="Settings" maxWidth="sm">
      <StyledTitle>SWAPS & LIQUIDITY</StyledTitle>

      <StyledSpeed>
        <div>
          Default Transaction Speed (GWEI)
          <Tooltip
            title={
              <>
                Adjusts the gas price (transaction fee) for your transaction.
                Higher GWEI = higher speed = higher fees.
                <br />
                Choose “Default” to use the settings from your current
                blockchain RPC node.
              </>
            }
          >
            <span>
              <HelpIcon />
            </span>
          </Tooltip>
        </div>

        <ButtonGroup
          options={[
            { label: "Default", value: "Default" },
            { label: "Standard (3)", value: "Standard (3)" },
            { label: "Fast (4)", value: "Fast (4)" },
            { label: "Instant (5)", value: "Instant (5)" },
          ]}
          sx={{ width: "100%", height: 32 }}
          type="separate"
        />
      </StyledSpeed>

      <StyledTolerance>
        <div>
          Slippage Tolerance
          <Tooltip
            title={
              <>
                Your transaction will revert if it is left confirming for longer
                than this time.
              </>
            }
          >
            <span>
              <HelpIcon />
            </span>
          </Tooltip>
        </div>

        <div>
          <ButtonGroup
            options={[
              { label: "0.1%", value: "0.1%" },
              { label: "0.5%", value: "0.5%" },
              { label: "1.0%", value: "1.0%" },
            ]}
            type="separate"
            sx={{ height: 32 }}
          />
          <TextField sx={{ ".MuiInputBase-root": { height: 32, width: 76 } }} />

          <Box
            component="span"
            sx={{ marginLeft: "4px", color: "primary.main" }}
          >
            %
          </Box>
        </div>

        <Box
          sx={{
            marginTop: "8px",
            fontSize: "14px",
          }}
        >
          Your transaction may fail
        </Box>
      </StyledTolerance>

      <StyledRow>
        <div>
          Tx deadline (mins)
          <Tooltip
            title={
              <>
                Setting a high slippage tolerance can help transactions succeed,
                but you may not get such a good price. Use with caution.
              </>
            }
          >
            <span>
              <HelpIcon />
            </span>
          </Tooltip>
        </div>
        <TextField sx={{ ".MuiInputBase-root": { height: 32, width: 52 } }} />
      </StyledRow>

      <StyledRow>
        <div>
          Expert Mode
          <Tooltip
            title={
              <>
                Bypasses confirmation modals and allows high slippage trades.
                Use at your own risk.
              </>
            }
          >
            <span>
              <HelpIcon />
            </span>
          </Tooltip>
        </div>
        <Switch />
      </StyledRow>

      <StyledRow>
        <div>
          Flippy sounds
          <Tooltip
            title={
              <>
                Fun sounds to make a truly immersive pancake-flipping trading
                experience
              </>
            }
          >
            <span>
              <HelpIcon />
            </span>
          </Tooltip>
        </div>
        <Switch />
      </StyledRow>

      <Box
        sx={{
          color: "primary.main",
          display: "flex",
          justifyContent: "center",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Customize Routing
      </Box>
    </Modal>
  );
}
