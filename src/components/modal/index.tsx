import { ButtonBase, DialogProps, DialogTitle } from "@mui/material";
import { StyledDialog } from "./styled";
import CloseIcon from "@/assets/icons/close.svg";

interface ModalProps extends DialogProps {
  title?: string;
  onClose: () => void;
}

export default function Modal({
  title,
  children,
  onClose,
  ...props
}: ModalProps) {
  return (
    <StyledDialog onClose={() => onClose?.()} fullWidth {...props}>
      {title && (
        <DialogTitle>
          <span>{title}</span>
          <ButtonBase onClick={() => onClose?.()}>
            <CloseIcon />
          </ButtonBase>
        </DialogTitle>
      )}

      <div>{children}</div>
    </StyledDialog>
  );
}
