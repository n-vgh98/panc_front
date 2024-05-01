import { getTrustWalletProvider } from "@/lib/trustWallet";

export enum ConnectorNames {
  MetaMask = "metaMask",
  TrustWallet = "trustWallet",
}

const isMetamaskInstalled = () => {
  if (typeof window === "undefined") {
    return false;
  }

  if (window.ethereum?.isMetaMask) {
    return true;
  }

  if (window.ethereum?.providers?.some((p) => p.isMetaMask)) {
    return true;
  }

  return false;
};

export type WalletItem = {
  id: string;
  title: string;
  icon: string;
  connectorId: string;
  deepLink?: string;
  installed?: boolean;
  checkConflict?: string;
  guide?: string;
  downloadLink?: string;
  mobileOnly?: boolean;
  qrCode?: () => Promise<string>;
};

const wallets: WalletItem[] = [
  {
    id: "metamask",
    title: "Metamask",
    icon: `/images/wallets/metamask.png`,
    get installed() {
      return isMetamaskInstalled();
      // && metaMaskConnector.ready
    },
    get checkConflict() {
      if (getTrustWalletProvider()) {
        return "Seems you have TrustWallet installed in your browser, Please Disable/Uninstall it to process with Metamask.";
      }
    },
    connectorId: ConnectorNames.MetaMask,
    downloadLink: "https://metamask.app.link/dapp/pancakeswap.finance/",
  },
  // {
  //   id: "trust",
  //   title: "Trust Wallet",
  //   icon: `/images/wallets/trust.png`,
  //   connectorId: ConnectorNames.TrustWallet,
  //   get installed() {
  //     return !!getTrustWalletProvider();
  //   },
  //   downloadLink:
  //     "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph",
  //   guide: "https://trustwallet.com/browser-extension",
  //   // guide: {
  //   //   desktop: "https://trustwallet.com/browser-extension",
  //   //   mobile: "https://trustwallet.com/",
  //   // },
  // },
];

export default wallets;
