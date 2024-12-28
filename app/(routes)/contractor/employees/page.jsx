"use client";
import Link from "next/link";
import React, { useState } from "react";
import ContractorLoadingSpinner from "@/components/contractor/LoadingSpinner";
import useFetchSiteDetail from "@/dataActions/site-equipment/FetchSiteDetail";
import FormModals from "@/components/forms/FormModals";
import SendInvite from "@/actionForms/invites/SendInvite";
import WorkersTable from "@/components/workers/WorkersTable";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import UserTable from "@/components/tables/InfoTable";
import { employeeColumn } from "@/data/columns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import useFetchProfile from "@/dataActions/accounts/FetchProfile";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover";
import { Ellipsis } from "lucide-react";

function ContractorEmployees() {
  const [open, setOpen] = useState(false);

  const {
    isLoading: isLoadingUser,
    data: profile,
    refetch: refetchProfile,
  } = useFetchProfile();

  return (
    <div className="p-3 overflow-hidden">
      <div>
        <div className="flex justify-between my-3">
          <h2 className="text-xl font-semibold">Your Employees</h2>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="text-blue900 bg-blue-50 border-blue-200"
              >
                + Invite Employee
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Invite employee</DialogTitle>
                <DialogDescription>
                  Inviting an employee will add them to your dashboard
                </DialogDescription>
              </DialogHeader>
              <SendInvite
                company={profile?.companies}
                handleCloseModal={setOpen}
              />
            </DialogContent>
          </Dialog>
        </div>
        {isLoadingUser ? (
          <SupplierLoadingSpinner />
        ) : profile?.companies?.company_workers?.length > 0 ? (
        <div className="w-full overflow-auto">
            <table className="w-full min-w-[500px]">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {profile?.companies?.company_workers?.map((worker)=>(
            <tr key={worker.reference}>
              <td>{worker?.user?.first_name} {worker?.user?.last_name}</td>
              <td>{worker?.user?.email}</td>
              <td>
              <Popover>
            <PopoverTrigger>
              <Ellipsis
                size={18}
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
            </PopoverTrigger>
              <PopoverContent className="flex flex-col gap-2 w-fit">
                <Link
                  href={`/contractor/employees/${worker?.slug}`}
                  className="flex items-center gap-1 cursor-pointer hover:text-primary"
                >
                  View Details
                </Link>
              </PopoverContent>
          </Popover>
              </td>
            </tr>
            ))
            }
          </tbody>
        </table>
        </div>
        ) : (
          <div className="place-content-center text-center">
            <h6>You have no Employees</h6>
          </div>
        )}
        
      </div>
    </div>
  );
}

export default ContractorEmployees;
