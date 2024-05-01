import Link from "@/components/link";
import { Divider, Fade } from "@mui/material";
import { useRef, useState } from "react";
import { StyledLink, StyledMenu } from "./styled";
import { usePathname } from "next/navigation";
import { PathListType } from "@/layout/path-list";
import useOnHoverOutside from "@/hooks/useOnHoverOutside";
import LogoutIcon from "@/assets/icons/logout.svg";

export default function NavItem({
  label,
  href,
  Icon,
  FillIcon,
  disabled,
  showItemsOnMobile,
  items,
}: PathListType) {
  const pathname = usePathname();

  const getIsActive = () => {
    if (pathname === href) {
      return true;
    } else if (items.find(({ href }) => pathname === href)) {
      return true;
    } else {
      return false;
    }
  };

  const dropdownRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpen = () => setMenuOpen(true);
  const handleClose = () => setMenuOpen(false);
  useOnHoverOutside(dropdownRef, handleClose);

  return (
    <li ref={dropdownRef} style={{ position: "relative" }}>
      <StyledLink onMouseOver={() => handleOpen()}>
        <Link href={href} data-active={getIsActive()} data-disabled={disabled}>
          {label ? label : <Icon />}
        </Link>
      </StyledLink>

      <Fade in={menuOpen}>
        <StyledMenu>
          {items.map(({ label, href, type, status, disabled }, i) => {
            return type === "divider" ? (
              <Divider key={i} />
            ) : (
              <li key={href}>
                <Link
                  href={href}
                  data-active={pathname === href}
                  data-disabled={disabled}
                >
                  {label}
                  {type === "external_link" && <LogoutIcon />}
                </Link>
              </li>
            );
          })}
        </StyledMenu>
      </Fade>
    </li>
  );
}
