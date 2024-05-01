import Link from "@/components/link";
import { StyledFooter, StyledList, StyledSocial } from "./styled";
import Image from "next/image";
import TwitterIcon from "@/assets/icons/social/twitter.svg";
import TelegramIcon from "@/assets/icons/social/telegram.svg";
import RedditIcon from "@/assets/icons/social/reddit.svg";
import InstagramIcon from "@/assets/icons/social/instagram.svg";
import GithubIcon from "@/assets/icons/social/github.svg";
import DiscordIcon from "@/assets/icons/social/discord.svg";
import YoutubeIcon from "@/assets/icons/social/youtube.svg";

const footerList = [
  {
    title: "ABOUT",
    links: [
      {
        title: "Contact",
        href: "/Contact",
      },
      {
        title: "Brand",
        href: "/Brand",
      },
      {
        title: "Blog",
        href: "/Blog",
      },
      {
        title: "Community",
        href: "/Community",
      },
      {
        title: "Litepaper",
        href: "/Litepaper",
      },
      {
        title: "Case Emission Projection",
        href: "/Case-Emission-Projection",
      },
      {
        title: "Terms of Service",
        href: "/Terms-of-Service",
      },
    ],
  },
  {
    title: "HELP",
    links: [
      {
        title: "Customer Support",
        href: "/Customer-Support",
      },
      {
        title: "Troubleshooting",
        href: "/Troubleshooting",
      },
      {
        title: "Guides",
        href: "/Guides",
      },
    ],
  },
  {
    title: "DEVELOPERS",
    links: [
      {
        title: "Github",
        href: "/Github",
      },
      {
        title: "Documentation",
        href: "/Documentation",
      },
      {
        title: "Bug Bounty",
        href: "/Bug-Bounty",
      },
      {
        title: "Audits",
        href: "/Audits",
      },
      {
        title: "Careers",
        href: "/Careers",
      },
    ],
  },
];

const socialList = [
  {
    icon: <TwitterIcon />,
    href: "https://twitter.com/pancakeswap",
  },
  {
    icon: <TelegramIcon />,
    href: "https://t.me/pancakeswap",
  },
  {
    icon: <RedditIcon />,
    href: "https://reddit.com/r/pancakeswap",
  },
  {
    icon: <InstagramIcon />,
    href: "https://instagram.com/pancakeswap_official",
  },
  {
    icon: <GithubIcon />,
    href: "https://github.com/pancakeswap/",
  },
  {
    icon: <DiscordIcon />,
    href: "https://discord.gg/pancakeswap",
  },
  {
    icon: <YoutubeIcon />,
    href: "https://www.youtube.com/@pancakeswap_official",
  },
];

export default function Footer() {
  return (
    <StyledFooter>
      <StyledList>
        {footerList.map(({ title, links }) => (
          <div key={title}>
            <div>{title}</div>
            {links.map(({ title, href }) => (
              <Link key={href} href={href}>
                {title}
              </Link>
            ))}
          </div>
        ))}

        <Link href="/">
          <Image
            src="/images/logo-name-2.svg"
            width={160}
            height={24}
            alt="PancakeSwap"
          />
        </Link>
      </StyledList>

      <StyledSocial>
        {socialList.map(({ icon, href }) => (
          <Link key={href} href={href}>
            {icon}
          </Link>
        ))}
      </StyledSocial>
    </StyledFooter>
  );
}
