import { Tab } from "@mui/material";
import Link from "@/components/link";
import { usePathname } from "next/navigation";
import { StyledLayout, StyledTabs } from "./styled";
import pathList from "@/layout/path-list";
import { useMemo } from "react";

type PagesTabsLayout = {
  listKey: string;
  children: React.ReactNode;
};

export default function PagesTabsLayout({
  children,
  listKey,
}: PagesTabsLayout) {
  const pathname = usePathname();

  const options = useMemo(
    () => pathList.find(({ key }) => key === listKey)?.items || [],
    [listKey]
  );

  return (
    <StyledLayout>
      <div>
        <StyledTabs value={pathname} centered>
          {options.map(({ label, href, disabled }) => (
            <Tab
              key={href}
              label={<Link href={href}>{label}</Link>}
              value={href}
              disabled={disabled}
            />
          ))}
        </StyledTabs>
      </div>
      {children}
    </StyledLayout>
  );
}
