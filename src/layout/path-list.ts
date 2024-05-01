import MoreIcon from "@/assets/icons/more.svg";

export type PathListItemsType = {
  label: React.ReactNode;
  href: string;
  type?: "external_link" | "divider";
  status?: object;
  disabled?: boolean;
};
export type PathListType = {
  key: string;
  label: React.ReactNode;
  href: string;
  Icon?: any;
  FillIcon?: any;
  disabled?: boolean;
  showItemsOnMobile?: boolean;
  type?: "external_link" | "divider";
  items: PathListItemsType[];
};

const pathList: PathListType[] = [
  {
    key: "trade",
    label: "Trade",
    href: "/swap",
    showItemsOnMobile: false,
    items: [
      {
        label: "Swap",
        href: "/swap",
      },
      {
        label: "Liquidity",
        href: "/liquidity",
        disabled: true,
      },
      {
        label: "Perpetual",
        href: "/perpetual",
        disabled: true,
      },
      {
        label: "Bridge",
        href: "https://bridge.pancakeswap.finance/",
        disabled: true,
        type: "external_link",
      },
      {
        label: "Limit (V2)",
        href: "/limit-orders",
        disabled: false,
      },
    ],
  },
  {
    key: "earn",
    label: "Earn",
    href: "/farms",
    disabled: true,
    items: [
      {
        label: "Farms",
        href: "/farms",
        disabled: true,
      },
      {
        label: "Pools",
        href: "/pools",
        disabled: true,
      },
      {
        label: "Liquid Staking",
        href: "/liquid-staking",
        disabled: true,
      },
    ],
  },
  {
    key: "win",
    label: "Win",
    href: "/lottery",
    items: [
      {
        label: "Trading Reward",
        href: "/trading-reward",
        disabled: true,
      },
      {
        label: "Trading Competition",
        href: "/competition",
        disabled: true,
      },
      {
        label: "Prediction (BETA)",
        href: "/prediction",
        disabled: false,
      },
      {
        label: "Lottery",
        href: "/lottery",
      },
      {
        label: "Pottery (BETA)",
        href: "/pottery",
        disabled: true,
      },
    ],
  },
  {
    key: "nft",
    label: "NFT",
    href: "/nfts",
    disabled: true,
    items: [
      {
        label: "Overview",
        href: "/nfts",
        disabled: true,
      },
      {
        label: "Collections",
        href: "/nfts/collections",
        disabled: true,
      },
      {
        label: "Activity",
        href: "/nfts/activity",
        disabled: true,
      },
    ],
  },
  {
    key: "game",
    label: "Game",
    href: "https://protectors.pancakeswap.finance",
    type: "external_link",
    disabled: true,
    items: [
      {
        label: "Pancake Protectors",
        href: "https://protectors.pancakeswap.finance",
        type: "external_link",
        status: { text: "New", color: "success" },
        disabled: true,
      },
    ],
  },
  {
    key: "more",
    label: "",
    href: "/info",
    Icon: MoreIcon,
    disabled: true,
    items: [
      {
        label: "Info",
        href: "/info/v3",
        disabled: true,
      },
      {
        label: "IFO",
        href: "/ifo",
        disabled: true,
      },
      {
        label: "Affiliate Program",
        href: "/affiliates-program",
        disabled: true,
      },
      {
        label: "Voting",
        href: "/voting",
        disabled: true,
      },
      {
        label: "",
        href: "",
        disabled: true,
        type: "divider",
      },
      {
        label: "Leaderboard",
        href: "/teams",
        disabled: true,
      },
      {
        label: "",
        href: "",
        disabled: true,
        type: "divider",
      },
      {
        label: "Blog",
        href: "https://blog.pancakeswap.finance",
        disabled: true,
        type: "external_link",
      },
      {
        label: "Docs",
        href: "https://docs.pancakeswap.finance",
        disabled: true,
        type: "external_link",
      },
    ],
  },
];

export default pathList;
