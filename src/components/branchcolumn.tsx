"use client";
import { Branches } from "@/types/branches";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Branches>[] = [
  {
    accessorKey: "branch_name",
    header: "Name",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
