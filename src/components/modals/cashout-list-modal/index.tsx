import Modal from "@/components/modal";
import ConnectWallet from "@/components/connect-wallet";
import { useEffect, useMemo, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import useAuthStore from "@/store/useAuthStore";
import Table from "@/components/table";
import { formatPrice } from "@/lib/numeral";
import { formatDateTime } from "@/lib/time";
import { cashoutListApi } from "@/apis/wallet";

type CashoutListModalProps = {
  open: boolean;
  toggle: () => void;
};

export default function CashoutListModal({
  open,
  toggle,
}: CashoutListModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState<any[]>();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (open) handleGetList();
  }, [open]);

  const handleGetList = async () => {
    setIsLoading(true);
    try {
      const res = await cashoutListApi();
      setList(res.data?.data);
    } catch (error) {}
    setIsLoading(false);
  };

  const columns = useMemo(
    () => [
      {
        title: "Amount",
        render: (item) => <div>{formatPrice(item.amount)}</div>,
      },
      {
        title: "Type",
        render: (item) => <div>{item.type}</div>,
      },
      {
        title: "Status",
        render: (item) => <div>{item.status?.status}</div>,
      },
      {
        title: "Date",
        render: (item) => <div>{formatDateTime(item.created_at)}</div>,
      },
    ],
    []
  );

  return (
    <Modal open={open} onClose={toggle} title="Cashout List" maxWidth="sm">
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
          gridTemplateColumns="auto auto auto auto"
          data={list}
          dataKey="created_at"
        />
      )}
    </Modal>
  );
}
