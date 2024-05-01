import { useState } from "react";
import {
  StyledNoData,
  StyledPagination,
  StyledTable,
  StyledWrapper,
} from "./styled";
import ArrowUpIcon from "@/assets/icons/arrow-up.svg";
import ArrowLeftIcon from "@/assets/icons/arrow-left.svg";
import { IconButton } from "@mui/material";

interface TableProps {
  columns: any[];
  gridTemplateColumns: string;
  defaultSortKey?: string;
  data: any;
  dataKey: string;
}

export default function Table({
  columns,
  gridTemplateColumns,
  defaultSortKey = "",
  data,
  dataKey,
}: TableProps) {
  const [sort, setSort] = useState({ key: defaultSortKey, dir: "asc" });
  const onSort = (sortKey) => {
    if (sortKey === sort.key)
      setSort({ key: sortKey, dir: sort.dir === "asc" ? "desc" : "asc" });
    else setSort({ key: sortKey, dir: "asc" });
  };

  return (
    <StyledWrapper>
      <StyledTable style={{ gridTemplateColumns }}>
        <div>
          {columns.map((column) => (
            <div key={column.title} data-table-header>
              {column.title}
              {column.sortKey && (
                <div
                  data-active={column.sortKey === sort.key}
                  onClick={() => onSort(column.sortKey)}
                >
                  <ArrowUpIcon data-active={sort.dir === "asc"} />
                  <ArrowUpIcon data-active={sort.dir === "desc"} />
                </div>
              )}
            </div>
          ))}
        </div>

        {data?.map((item) => (
          <div key={item[dataKey]}>
            {columns.map((column) => (
              <div key={column.title} data-table-cell>
                {column.render(item)}
              </div>
            ))}
          </div>
        ))}
      </StyledTable>

      {!data?.length && <StyledNoData>There is nothing to show</StyledNoData>}

      {/* <StyledPagination>
        <IconButton>
          <ArrowLeftIcon />
        </IconButton>
        <span>Page 1 of 13</span>
        <IconButton disabled>
          <ArrowLeftIcon />
        </IconButton>
      </StyledPagination> */}
    </StyledWrapper>
  );
}
