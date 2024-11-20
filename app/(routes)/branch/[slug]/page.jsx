"use client";
import { Button } from "@/app/components/ui/button";
import UserTable from "@/components/tables/InfoTable";
import { branchColumn } from "@/data/columns";
import { useFetchBranchDetail } from "@/dataActions/branches/branchesActions";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function BranchDashboard({ params: { slug } }) {
  // TODO: the dashboard for the branch.
  // As branch is only for the supplier, the code for the dashboard can be written here unlike in the previous where there
  // were different layouts.
  const [rows, setRows] = useState([])

  const {
    isLoading: isLoadingBranch,
    data: branch,
    refetch: refetchBranch,
    isSuccess
  } = useFetchBranchDetail(slug);

  useEffect(() => {
    if (isSuccess) {
      const rows = branch?.shell_equipments_branch?.map((obj) => {
        return {
          ...obj,
          id: obj.slug,
        };
      });
      setRows(rows);
    }
  }, [branch, isSuccess]);

  return (
  <div className="h-[calc(100vh-115px)]">
    <div className="py-6 lg:p-4 h-full">
      <div className="flex flex-col">
      <span className="text-xl font-semibold">{branch?.name}</span> 
      <span className="text-[#707070] text-sm">{branch?.location} Branch</span>
      </div>
      <hr className="mb-5 mt-3"/>
      <div>
        <div className="flex justify-between gap-4 mb-3">
          <span>{branch?.name} Inventory</span>
          <Link href={`/branch/${slug}/shell`}>
          <Button variant="outline" className='text-blue900 bg-blue-50 border-blue-200'>+ Add product</Button>
          </Link>
        </div>
        <UserTable rows={rows} columns={branchColumn} />
      </div>
    </div>
    </div>
    )
}

export default BranchDashboard;
