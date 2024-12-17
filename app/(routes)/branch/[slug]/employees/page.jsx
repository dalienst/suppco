'use client'

import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import UserTable from "@/components/tables/InfoTable";
import { employeeColumn } from "@/data/columns";
import { useFetchBranchDetail } from "@/dataActions/branches/branchesActions";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import SendInvitation from "@/actionForms/invitation/SendInvitation";

function BranchEmployees() {
  const [rows, setRows] = useState([])
  const [open, setOpen] = useState(false);
  const {slug} = useParams()
  const {
    isLoading: isLoadingBranch,
    data: branch,
    refetch: refetchBranch,
    isSuccess
  } = useFetchBranchDetail(slug);

  return (
    <div>
      <div className="border-b py-3 mb-5">
       <h2 className="text-lg font-semibold">{branch?.name}&apos;s Employees</h2>
      
      </div>
          {isLoadingBranch ? (
            <SupplierLoadingSpinner />
          ) : branch?.branch_employees?.length > 0 ? (
            // <EmployeesTable employees={profile?.companies?.company_employees} />
            <UserTable rows={branch?.branch_employees} columns={employeeColumn} />
          ) : (
            <div className="place-content-center text-center">
              <h6>You have no Employees</h6>
            </div>
          )}
        </div>
  )
}

export default BranchEmployees