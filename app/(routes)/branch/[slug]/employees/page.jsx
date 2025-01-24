"use client";

import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import UserTable from "@/components/tables/InfoTable";
import { employeeColumn } from "@/data/columns";
import { useFetchBranchDetail } from "@/dataActions/branches/branchesActions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/button";
import SendInvitation from "@/actionForms/invitation/SendInvitation";
import { ChevronDown } from "lucide-react";
import AddEmployeeToBranch from "@/actionForms/branches/AddEmployeeToBranch";
import { getUser } from "@/services/accounts";
import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import useUserId from "@/hooks/useUserId";

function BranchEmployees() {
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);
  const [openEmployeeSelectionPanel, setOpenEmployeeSelectionPanel] = useState(false);
  const { slug } = useParams();
  const {
    isLoading: isLoadingBranch,
    data: branch,
    refetch: refetchBranch,
    isSuccess,
  } = useFetchBranchDetail(slug);

  const axios = useAxiosAuth();
  const userId = useUserId();
  const { isLoading: isLoadingUser, data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUser(userId, axios),
  });

  return (
    <div>
      <div className="border-b py-3 mb-5 flex items-center justify-between gap-5">
        <h2 className="text-lg font-semibold">
          {branch?.name}&apos;s Employees
        </h2>
        <div className="relative">
          <button
            onClick={() => setOpenEmployeeSelectionPanel((prev) => !prev)}
            className="border border-grayBlue rounded-lg p-2 flex gap-2 items-center"
          >
            <span>Add employee(s)</span>
            <ChevronDown size={16} />
          </button>

          {openEmployeeSelectionPanel && (
            <div className="absolute bg-white z-50 mt-2 border shadow rounded-lg right-0 p-2 w-[320px]">
              <AddEmployeeToBranch
                branch={branch}
                profile={profile}
                slug={slug}
                refetchBranch={refetchBranch}
                closeEmployeeSelectionPanel={() =>
                  setOpenEmployeeSelectionPanel(false)
                }
              />
            </div>
          )}
        </div>
      </div>
      {isLoadingBranch ? (
        <SupplierLoadingSpinner />
      ) : branch?.employees?.length > 0 ? (
        <UserTable
          rows={branch?.employees_details}
          columns={employeeColumn}
          redirectLink={`/branch/${slug}/employees`}
        />
      ) : (
        <div className="place-content-center text-center">
          <h6>You have no Employees</h6>
        </div>
      )}
    </div>
  );
}

export default BranchEmployees;
