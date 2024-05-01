import Modal from "@/components/modal";
import { StyledContent } from "./styled";
import TicketNumber from "@/components/ticket-number";

type BuyTicketsResultModalProps = {
  open: boolean;
  toggle: () => void;
  result: any;
};

export default function BuyTicketsResultModal({
  open,
  toggle,
  result,
}: BuyTicketsResultModalProps) {
  return (
    <Modal open={open} onClose={toggle} title="Bought Tickets" maxWidth="sm">
      <StyledContent>
        <div>
          You have successfully purchased ticket
          {result?.ticket_list?.length > 1 && "s"}.
        </div>

        <div data-total-amount>
          <span>Total Amount:</span>
          <span>${result?.total_ticket_amount}</span>
        </div>

        <div>
          <span>
            Your ticket{result?.ticket_list?.length > 1 && "s"} number
            {result?.ticket_list?.length > 1 && "s"}:
          </span>

          <div>
            {result?.ticket_list?.map((n) => (
              <TicketNumber key={n} number={n} sx={{ mt: 1 }} />
            ))}
          </div>
        </div>
      </StyledContent>
    </Modal>
  );
}
