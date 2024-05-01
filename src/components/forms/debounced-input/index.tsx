import { StandardTextFieldProps, TextField } from "@mui/material";
import useDebounce from "@/hooks/useDebounce";

interface DebouncedInputProps extends StandardTextFieldProps {
  onChangeEnd?: (arg) => void;
}

export default function DebouncedInput({
  onChange,
  onChangeEnd,
  ...props
}: DebouncedInputProps) {
  const { onChangeInput } = useDebounce({ onChange, onChangeEnd });

  return <TextField onChange={onChangeInput} {...props} />;
}
