import { ColumnDef } from "@tanstack/react-table";

export type Branches = {
  id: number;
  company_id: number;
  branch_name: string;
  branch_type: string;
  status: string;
  contact_number: string;
  email: string;
  address: string;
  latitude: number;
  longitude: number;
  username: string;
  password: string;
};

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
