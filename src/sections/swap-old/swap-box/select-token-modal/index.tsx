import Modal from "@/components/modal";
import { StyledRow } from "./styled";
import tokensList from "../../token-list";

type SelectTokenModalProps = {
  open: boolean;
  toggle: () => void;
  onSelect: (token) => void;
};

export default function SelectTokenModal({
  open,
  toggle,
  onSelect,
}: SelectTokenModalProps) {
  return (
    <Modal open={open} onClose={toggle} title="Select a Token" maxWidth="xs">
      <div>
        {tokensList.map((token) => (
          <StyledRow
            key={token.name}
            onClick={() => {
              onSelect(token);
              toggle();
            }}
          >
            <img
              src={String(token.icon)}
              width={24}
              height={24}
              loading="lazy"
            />

            <div>
              <span>{token.name}</span>
              <span>{token.long_name}</span>
            </div>
          </StyledRow>
        ))}
      </div>
    </Modal>
  );
}
