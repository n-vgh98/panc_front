import { useState } from "react";
import { StyledButtonGroup } from "./styled";
import { Button, ButtonGroupProps as MuiButtonGroupProps } from "@mui/material";

interface ButtonGroupProps extends MuiButtonGroupProps {
  options: { label: string; value: string }[];
  type?: "combine" | "separate";
}

export default function ButtonGroup({
  options,
  type = "combine",
  ...props
}: ButtonGroupProps) {
  const [active, setActive] = useState(options[0].value);

  return (
    <StyledButtonGroup type={type} {...props}>
      {options.map(({ label, value }) => (
        <Button
          key={value}
          variant={value === active ? "contained" : "outlined"}
          onClick={() => setActive(value)}
        >
          {label}
        </Button>
      ))}
    </StyledButtonGroup>
  );
}
