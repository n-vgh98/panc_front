import Modal from "@/components/modal";
import ConnectWallet from "@/components/connect-wallet";

type RecentTransactionsModalProps = {
  open: boolean;
  toggle: () => void;
};

export default function RecentTransactionsModal({
  open,
  toggle,
}: RecentTransactionsModalProps) {
  return (
    <Modal
      open={open}
      onClose={toggle}
      title="Recent Transactions"
      maxWidth="xs"
    >
      <ConnectWallet
        size="large"
        sx={{ mb: 4, height: "48px", width: "100%" }}
      />
    </Modal>
  );
}
