import {
  CircularProgress,
  InputAdornment,
  TextField,
  StandardTextFieldProps,
} from "@mui/material";
import { StyledBox } from "./styled";

export interface CommonInputProps extends StandardTextFieldProps {
  loading?: boolean;
  subField?: React.ReactNode;
}

export default function CommonInput({
  loading,
  subField,
  InputProps,
  ...props
}: CommonInputProps) {
  return (
    <StyledBox>
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {loading ? (
                <CircularProgress size={20} />
              ) : subField ? (
                subField
              ) : null}
            </InputAdornment>
          ),
          ...InputProps,
        }}
        {...props}
      />
    </StyledBox>
  );
}
