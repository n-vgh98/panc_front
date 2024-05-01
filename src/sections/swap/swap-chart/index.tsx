import { StyledChart, StyledTop, StyledValue, StyledWrapper } from "./styled";
import SwitchIcon from "@/assets/icons/switch.svg";
import ExpandIcon from "@/assets/icons/expand.svg";
import Collapse2Icon from "@/assets/icons/collapse.svg";
import { Box, Button, IconButton, useTheme } from "@mui/material";
import ButtonGroup from "@/components/button-group";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { name: "4:00 PM", amt: 2400 },
  { name: "5:00 PM", amt: 2210 },
  { name: "6:00 PM", amt: 2290 },
  { name: "7:00 PM", amt: 2000 },
  { name: "8:00 PM", amt: 2181 },
  { name: "9:00 PM", amt: 2500 },
  { name: "10:00 PM", amt: 2100 },
];

export default function SwapChart() {
  const theme = useTheme();

  return (
    <StyledWrapper>
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap" }}
      >
        <StyledValue>
          <div>
            <span>12,108.37</span>
            <span>Jun 17, 2023, 06:13 PM</span>
          </div>
          <span></span>
          <Box component="span">-251.485 (-2.03%)</Box>
        </StyledValue>

        <ButtonGroup
          options={[
            { label: "24H", value: "24H" },
            { label: "1W", value: "1W" },
            { label: "1M", value: "1M" },
            { label: "1Y", value: "1Y" },
          ]}
        />
      </Box>

      <StyledChart>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={theme.palette.error.main}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={theme.palette.error.main}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis
              domain={["dataMin", "dataMax"]}
              orientation="right"
              tickLine={false}
              axisLine={false}
            />
            <Tooltip />
            <ReferenceLine
              y={2100}
              strokeDasharray="3 3"
              stroke={theme.palette.error.main}
            />
            <Area
              dataKey="amt"
              stroke={theme.palette.error.main}
              fillOpacity={1}
              fill="url(#chartColor)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </StyledChart>
    </StyledWrapper>
  );
}
