import Modal from "@/components/modal";
import ConnectWallet from "@/components/connect-wallet";
import { useEffect, useMemo, useState } from "react";
import { transactionListApi } from "@/apis/wallet";
import { Box, CircularProgress } from "@mui/material";
import useAuthStore from "@/store/useAuthStore";
import Table from "@/components/table";
import { formatPrice } from "@/lib/numeral";
import { formatDateTime } from "@/lib/time";

type TransactionsModalProps = {
  open: boolean;
  toggle: () => void;
};

export default function TransactionsModal({
  open,
  toggle,
}: TransactionsModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState<any[]>();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (open) handleGetList();
  }, [open]);

  const handleGetList = async () => {
    setIsLoading(true);
    try {
      const res = await transactionListApi();
      setList(res.data?.data);
    } catch (error) {}
    setIsLoading(false);
  };

  const columns = useMemo(
    () => [
      {
        title: "Amount",
        render: (item) => <div>{formatPrice(item.amount)}$</div>,
      },
      {
        title: "Transaction Type",
        render: (item) => <div>{item.transaction_type}</div>,
      },
      {
        title: "Date",
        render: (item) => <div>{formatDateTime(item.created_at)}</div>,
      },
    ],
    []
  );

  return (
    <Modal open={open} onClose={toggle} title="Transactions" maxWidth="sm">
      {!user && (
        <ConnectWallet
          size="large"
          sx={{ mb: 4, height: "48px", width: "100%" }}
        />
      )}

      {isLoading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <Table
          columns={columns}
          gridTemplateColumns="auto auto auto"
          data={list}
          dataKey="created_at"
        />
      )}
    </Modal>
  );
}
