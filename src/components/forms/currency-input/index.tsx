import { NumericFormat } from "react-number-format";
import CommonInput, { CommonInputProps } from "../common-input";
import useDebounce from "@/hooks/useDebounce";
import { formatPrice } from "@/lib/numeral";
import { useEffect, useRef, useState } from "react";
import { convertToUsdApi } from "@/apis/wallet";
import { StyledWrapper } from "./styled";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";
import useModal from "@/hooks/useModal";
import SelectTokenModal from "@/components/modals/select-token-modal";

interface CurrencyInputProps
  extends Omit<CommonInputProps, "defaultValue" | "type" | "value"> {
  onChangeEnd?: (arg) => void;
  value: string;
  currency: { symbol: string; name: string };
  onCurrencyChange?: (c) => void;
  dependencies?: any[];
}

export default function CurrencyInput({
  value,
  onChange,
  onChangeEnd,
  currency,
  onCurrencyChange,
  dependencies = [],
  loading,
  ...props
}: CurrencyInputProps) {
  const [usdPrice, setUsdPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openSelect, toggleSelect] = useModal();
  const fetchRef = useRef(0);

  const onChangeLocal = (arg) => {
    onChange?.(arg);
  };

  const onChangeEndLocal = async (arg) => {
    onChangeEnd?.(arg);
    setUsdPrice("");

    if (arg.value) {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;

      const data = { type: currency.symbol, amount: arg.value };
      setIsLoading(true);
      try {
        const res = await convertToUsdApi(data);

        if (fetchId !== fetchRef.current) return;

        setUsdPrice(res.data?.data?.price);
      } catch (error) {}
      setIsLoading(false);
    }
  };

  const { onChangeInput } = useDebounce({
    onChange: onChangeLocal,
    onChangeEnd: onChangeEndLocal,
    dependencies: [currency, ...dependencies],
  });

  useEffect(() => {
    if (!value) setUsdPrice("");
  }, [value]);

  return (
    <>
      <StyledWrapper>
        <label
          onClick={() => onCurrencyChange && toggleSelect()}
          style={{ cursor: onCurrencyChange ? "pointer" : "auto" }}
        >
          <span>{currency.symbol}</span>
          {onCurrencyChange && <ArrowDownIcon />}
        </label>
        <NumericFormat
          value={value}
          allowNegative={false}
          onValueChange={(values, sourceInfo) => {
            if (sourceInfo?.source === "event") onChangeInput(values);
          }}
          isAllowed={({ value }) => value !== "0"}
          thousandSeparator
          customInput={CommonInput}
          loading={isLoading || loading}
          subField={usdPrice ? `$${formatPrice(usdPrice)}` : null}
          {...props}
        />
      </StyledWrapper>

      {openSelect && (
        <SelectTokenModal
          open
          toggle={toggleSelect}
          onSelect={onCurrencyChange}
        />
      )}
    </>
  );
}
