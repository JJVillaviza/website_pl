import { ColumnDef } from "@tanstack/react-table";

export type Branches = {
  id: number;
  branch_name: string;
  address: string;
  status: string;
};

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
