import { useState } from "react";

export default function useModal(): [any, (customValue?: any) => void] {
  const [open, setOpen] = useState<any>(false);

  const toggle = (customValue) => setOpen(customValue ?? !open);

  return [open, toggle];
}
