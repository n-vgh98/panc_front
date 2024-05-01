import NextLink, { LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
}

export default function Link(props: LinkProps) {
  return <NextLink {...props} />;
}
