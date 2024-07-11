import { columns } from "@/components/branchcolumn";
import { DataTable } from "@/components/ui/data-table";
import { Branches } from "@/types/branches";
import { Fragment } from "react";

async function BranchFetch(): Promise<Branches[]> {
  const response = await fetch(
    "http://localhost:3001/branches?branch_type=Branch&company_id=1",
    {
      cache: "no-store",
    }
  );

  return await response.json();
}

export default async function Branch() {
  const data = await BranchFetch();

  return (
    <Fragment>
      <DataTable columns={columns} data={data} />
    </Fragment>
  );
}
