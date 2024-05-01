import { useRef, useState } from "react";
import {
  StyledBalance,
  StyledMenu,
  StyledProfile,
  StyledWrapper,
} from "./styled";
import { Divider, Fade } from "@mui/material";
import { useDisconnect } from "wagmi";
import WalletIcon from "@/assets/icons/wallet.svg";
import DollarIcon from "@/assets/icons/dollar.svg";
import ArrowRightIcon from "@/assets/icons/arrow-right.svg";
import ConnectWallet from "@/components/connect-wallet";
import useAuthStore from "@/store/useAuthStore";
import { formatPrice } from "@/lib/numeral";
import TransactionsModal from "@/components/modals/transactions-modal";
import useModal from "@/hooks/useModal";
import Link from "@/components/link";
import TicketsListModal from "@/components/modals/tickets-list-modal";
import useOnHoverOutside from "@/hooks/useOnHoverOutside";
import CashoutListModal from "@/components/modals/cashout-list-modal";
import LogoutIcon from "@/assets/icons/logout.svg";

export default function HeaderButtons() {
  const [openCashout, toggleCashout] = useModal();
  const [openTransaction, toggleTransaction] = useModal();
  const [openTickets, toggleTickets] = useModal();

  const { disconnect } = useDisconnect();

  const user = useAuthStore((state) => state.user);

  const dropdownRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpen = () => setMenuOpen(true);
  const handleClose = () => setMenuOpen(false);
  useOnHoverOutside(dropdownRef, handleClose);

  return (
    <>
      <StyledWrapper>
        {user ? (
          <StyledBalance>
            <DollarIcon />
            <span>{formatPrice(user?.wallet_balance)}</span>
          </StyledBalance>
        ) : null}
        {!user ? (
          <ConnectWallet sx={{ height: "32px" }} />
        ) : (
          <div ref={dropdownRef} style={{ position: "relative" }}>
            <StyledProfile
              onMouseOver={() => handleOpen()}
              title={user?.wallet_address}
            >
              <div>
                <WalletIcon />
              </div>
              <span>{`0x...${user?.wallet_address?.slice(-4)}`}</span>
              <span>
                <ArrowRightIcon />
              </span>
            </StyledProfile>

            <Fade in={menuOpen}>
              <StyledMenu>
                <li>
                  <Link href="/deposit">Deposit to wallet</Link>
                </li>
                <li>
                  <Link href="/withdraw">Withdraw from wallet</Link>
                </li>
                <Divider />
                <li>
                  <div onClick={() => toggleCashout()}>Cashout List</div>
                </li>
                <li>
                  <div onClick={() => toggleTransaction()}>
                    Transaction History
                  </div>
                </li>
                <li>
                  <div onClick={() => toggleTickets()}>Tickets List</div>
                </li>

                <Divider />

                <li>
                  <div onClick={() => disconnect()}>
                    Disconnect <LogoutIcon />
                  </div>
                </li>
              </StyledMenu>
            </Fade>
          </div>
        )}
      </StyledWrapper>

      <CashoutListModal open={openCashout} toggle={toggleCashout} />
      <TransactionsModal open={openTransaction} toggle={toggleTransaction} />
      <TicketsListModal open={openTickets} toggle={toggleTickets} />
    </>
  );
}
