import { columns } from "@/components/branchcolumn";
import { DataTable } from "@/components/ui/data-table";
import { Branches } from "@/types/branches";

async function BranchFetch(): Promise<Branches[]> {
  const response = await fetch(
    "http://localhost:3001/branches?branch_type=Branch",
    {
      cache: "no-store",
    }
  );
  return await response.json();
}

export default async function Branch() {
  const data = await BranchFetch();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
