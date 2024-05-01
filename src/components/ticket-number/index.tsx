import Ball1Icon from "@/assets/icons/ball_1.svg";
import Ball2Icon from "@/assets/icons/ball_2.svg";
import Ball3Icon from "@/assets/icons/ball_3.svg";
import Ball4Icon from "@/assets/icons/ball_4.svg";
import Ball5Icon from "@/assets/icons/ball_5.svg";
import Ball6Icon from "@/assets/icons/ball_6.svg";
import { StyledNumber } from "./styled";
import { BoxProps } from "@mui/material";

interface TicketNumberProps extends BoxProps {
  number: string | number;
}

export default function TicketNumber({ number, ...props }: TicketNumberProps) {
  const getBallIcon = (i) => {
    switch (i) {
      case 0:
        return <Ball1Icon />;
      case 1:
        return <Ball2Icon />;
      case 2:
        return <Ball3Icon />;
      case 3:
        return <Ball4Icon />;
      case 4:
        return <Ball5Icon />;
      case 5:
        return <Ball6Icon />;
    }
  };

  return (
    <StyledNumber {...props}>
      {number
        ? String(number)
            ?.split("")
            ?.map((n, i) => (
              <div key={n + i}>
                {getBallIcon(i)}
                <span>{n}</span>
              </div>
            ))
        : null}
    </StyledNumber>
  );
}
