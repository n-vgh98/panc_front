import Image from "next/image";
import { StyledFiller, StyledHeader, StyledNav } from "./styled";
import Link from "@/components/link";
import NavItem from "./nav-item";
import HeaderButtons from "./header-buttons";
import pathList from "@/layout/path-list";
import { formatDateTime } from "@/lib/time";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <div>
          <Link href="/">
            <Image
              src="/images/logo-name.svg"
              width={160}
              height={24}
              alt="PancakeSwap"
              priority
            />
          </Link>

          <StyledNav>
            <ul>
              {pathList.map((item) => (
                <NavItem {...item} />
              ))}
            </ul>
          </StyledNav>
        </div>

        <HeaderButtons />
      </StyledHeader>

      <StyledFiller />
    </>
  );
}
