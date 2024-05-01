import { Box, BoxProps } from "@mui/material";
import { StyledBox } from "./styled";

interface ContainerProps extends BoxProps {}

export default function Container(props: ContainerProps) {
  return <StyledBox {...props} />;
}
