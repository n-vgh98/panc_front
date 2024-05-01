import Table from "@/components/table";
import { StyledWrapper } from "./styled";
import { useMemo } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import ButtonGroup from "@/components/button-group";

const data = [
  {
    id: 1,
    token_name: "Wombat Token (WOM)",
    price: 0.055,
    change: -3.81,
  },
  {
    id: 2,
    token_name: "RFOX (RFOX)",
    price: 0.012,
    change: 10.62,
  },
  {
    id: 3,
    token_name: "Linear Token (LINA)",
    price: 0.014,
    change: 7.46,
  },
];

export default function SwapHot() {
  const columns = useMemo(
    () => [
      {
        title: "Token Name",
        render: (item) => <div>{item.token_name}</div>,
      },
      {
        title: "Price",
        sortKey: "Price",
        render: (item) => <div>{item.price}</div>,
      },
      {
        title: "Change",
        sortKey: "Change",
        render: (item) => <div>{item.change}</div>,
      },
    ],
    []
  );

  return (
    <StyledWrapper>
      <ButtonGroup
        options={[
          { label: "Price Change", value: "Price Change" },
          { label: "Volume (24H)", value: "Volume (24H)" },
        ]}
        color="deluge"
        sx={{ width: "100%", minWidth: "400px" }}
      />

      <FormControlLabel
        control={<Checkbox />}
        label="Show pairs with trading rewards"
        sx={{ my: "24px" }}
      />

      <Table
        columns={columns}
        gridTemplateColumns="auto auto auto"
        defaultSortKey="Price"
        data={data}
        dataKey="id"
      />
    </StyledWrapper>
  );
}
