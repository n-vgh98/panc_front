import { TextField, TextFieldProps } from "@mui/material";
import { useEffect, useState } from "react";

type NumberInputProps = TextFieldProps & {
  onChangeEnd?: (value) => void;
  allowDecimal?: boolean;
};

export default function NumberInput({
  onChange,
  onChangeEnd,
  allowDecimal = true,
  ...props
}: NumberInputProps) {
  const [localValue, setLocalValue] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onChangeEnd?.(localValue);
    }, 800);

    return () => clearTimeout(delayDebounceFn);
  }, [localValue]);

  const handleChange = (e) => {
    const regex = allowDecimal ? /^[0-9]*\.?[0-9]*$/ : /^[0-9\b]+$/;
    if (
      (e.target.value === "" || regex.test(e.target.value)) &&
      e.target.value !== "0"
    ) {
      onChange?.(e.target.value);
      setLocalValue(e.target.value);
    }
  };

  return <TextField onChange={handleChange} {...props} />;
}
