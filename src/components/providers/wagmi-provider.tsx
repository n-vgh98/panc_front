import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { TrustWalletConnector } from "@/lib/trustWallet";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [
    // alchemyProvider({ apiKey: "yourAlchemyApiKey" }),
    publicProvider(),
  ]
);

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false,
  },
});

export const trustWalletConnector = new TrustWalletConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
});

const config = createConfig({
  autoConnect: false,
  connectors: [metaMaskConnector],
  publicClient,
  webSocketPublicClient,
});

interface WagmiProviderProps {
  children: React.ReactNode;
}

export default function WagmiProvider({ children }: WagmiProviderProps) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}
