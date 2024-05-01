import {
  Box,
  Button,
  ButtonProps,
  CircularProgress,
  Dialog,
  Grid,
} from "@mui/material";
import useModal from "@/hooks/useModal";
import { StyledButton, StyledSelectWallet, StyledInstalled } from "./styled";
import wallets, { WalletItem } from "./wallets";
import { useState } from "react";
import Intro from "./intro";
import NotInstalled from "./not-installed";
import WarningIcon from "@/assets/icons/warning.svg";
import { useConnect } from "wagmi";
import useAuthStore from "@/store/useAuthStore";

interface ConnectWalletProps extends ButtonProps {}
export default function ConnectWallet(props: ConnectWalletProps) {
  const [open, toggle] = useModal();
  const [selected, setSelected] = useState<WalletItem | null>(null);
  const { connectors } = useConnect();
  const login = useAuthStore((state) => state.login);
  const [isLoading, setIsLoading] = useState(false);

  const onSelect = async (wallet) => {
    setSelected(wallet);
    if (wallet.installed && !wallet?.checkConflict) {
      setIsLoading(true);
      await login(wallet, connectors);
      setIsLoading(false);
    }
  };

  return (
    <>
      <StyledButton variant="contained" onClick={() => toggle()} {...props}>
        Connect Wallet
      </StyledButton>

      <Dialog open={open} onClose={() => toggle()} maxWidth="md">
        <Box sx={{ display: "flex" }}>
          <StyledSelectWallet>
            <strong>Connect Wallet</strong>
            <p>
              Start by connecting with one of the wallets below. Be sure to
              store your private keys or seed phrase securely. Never share them
              with anyone.
            </p>
            <Grid container spacing={2}>
              {wallets.map((wallet) => (
                <Grid key={wallet.id} item>
                  <div onClick={() => onSelect(wallet)}>
                    <img
                      loading="lazy"
                      width="50"
                      height="50"
                      src={wallet.icon}
                    />
                    <span>{wallet.title}</span>
                  </div>
                </Grid>
              ))}
            </Grid>
          </StyledSelectWallet>

          <Box sx={{ flex: 1, padding: "48px 32px" }}>
            {!selected ? (
              <Intro />
            ) : !selected.installed ? (
              <NotInstalled wallet={selected} />
            ) : (
              <StyledInstalled>
                <img
                  loading="lazy"
                  width="108"
                  height="108"
                  src={selected.icon}
                />
                <div>Opening {selected.title}</div>
                <div>Please confirm in {selected.title}</div>
                <div data-conflict>
                  {selected?.checkConflict ? (
                    <>
                      <WarningIcon />
                      {selected?.checkConflict}
                    </>
                  ) : null}
                </div>
                {isLoading && <CircularProgress />}
              </StyledInstalled>
            )}
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
