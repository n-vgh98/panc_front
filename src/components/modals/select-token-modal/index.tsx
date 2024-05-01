import Modal from "@/components/modal";
import { StyledRow } from "./styled";
import { useEffect, useState } from "react";
import { currencyListApi } from "@/apis/wallet";
import { Avatar, Box, CircularProgress, TextField } from "@mui/material";
import WalletIcon from "@/assets/icons/wallet.svg";
import debounce from "lodash.debounce";

type SelectTokenModalProps = {
  open: boolean;
  toggle: () => void;
  onSelect?: (token) => void;
};

export default function SelectTokenModal({
  open,
  toggle,
  onSelect,
}: SelectTokenModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState<any[]>();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    handleFetchList({ page, search });
  }, [open]);

  const handleFetchList = async (params) => {
    if (open) {
      setIsLoading(true);
      try {
        const res = await currencyListApi(params);
        setHasMore(res.data.next);
        setList((prev) =>
          prev?.length ? [...prev, ...res.data.data] : res.data.data
        );
      } catch (error) {}
      setIsLoading(false);
    }
  };

  const handleSearch = debounce((e) => {
    setList([]);
    setSearch(e.target.value);
    setPage(1);
    handleFetchList({ page: 1, search: e.target.value });
  }, 800);

  const loadMore = () => {
    setPage(page + 1);
    handleFetchList({ page: page + 1, search });
  };

  return (
    <Modal open={open} onClose={toggle} title="Select a Token" maxWidth="xs">
      <TextField onChange={handleSearch} sx={{ width: "100%", mb: 2 }} />

      {!list?.length && !isLoading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "24px 12px",
          }}
        >
          There is nothing to show
        </Box>
      )}

      {list?.map((token) => (
        <StyledRow
          key={token.symbol}
          onClick={() => {
            onSelect?.(token);
            toggle();
          }}
        >
          <Avatar src={String(token.icon)}>
            <WalletIcon />
          </Avatar>
          <div>
            <span>{token.symbol}</span>
            <span>{token.name}</span>
          </div>
        </StyledRow>
      ))}

      {isLoading && (
        <Box display="flex" justifyContent="center" my={2}>
          <CircularProgress />
        </Box>
      )}

      {hasMore && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "12px",
          }}
        >
          <span
            style={{
              cursor: "pointer",
            }}
            onClick={() => loadMore()}
          >
            Load More
          </span>
        </Box>
      )}
    </Modal>
  );
}
