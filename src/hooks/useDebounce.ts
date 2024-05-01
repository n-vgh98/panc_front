import { useMemo } from "react";
import debounce from "lodash.debounce";

type useDebounceParams = {
  onChange?: (arg) => void;
  onChangeEnd?: (arg) => void;
  dependencies?: any[];
};

export default function useDebounce({
  onChange,
  onChangeEnd,
  dependencies = [],
}: useDebounceParams) {
  // memoize the debounce call with useMemo
  const debouncedSendRequest = useMemo(
    () =>
      debounce((arg) => {
        onChangeEnd?.(arg);
      }, 800),
    dependencies
  );

  const onChangeInput = (arg) => {
    onChange?.(arg);
    debouncedSendRequest(arg);
  };

  return { onChangeInput };
}
