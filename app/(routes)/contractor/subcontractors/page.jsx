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
import SubContractorInvite from "@/actionForms/subcontractorInvite/SubContractorInvite";
import { ChevronDown } from "lucide-react";
import { getSites } from "@/services/sites";
import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "@/hooks/useAxiosAuth";

function SubContractors() {
  const [open, setOpen] = useState(false);
  const axios = useAxiosAuth();

  const {
    isLoading: isLoadingUser,
    data: profile,
    refetch: refetchProfile,
  } = useFetchProfile();

  const {
    data: sites,
    isSuccess,
  } = useQuery({
    queryKey: ["sites"],
    queryFn: () => getSites(axios),
  });
  console.log(sites,'sites from subContractor page');

  return (
    <div className="p-3">
      <div>
        <div className="flex justify-between my-3">
          <h2 className="text-xl font-semibold">Your Subcontractors</h2>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="text-blue900 bg-blue-50 border-blue-200"
              >
                + Invite Subcontractor
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Invite Subcontractor</DialogTitle>
                <DialogDescription>
                  Inviting a Subcontractor will add them to your dashboard
                </DialogDescription>
              </DialogHeader>
              <SubContractorInvite
                  handleCloseModal={setOpen}
                  company={profile?.companies}
                  sites={sites}
                />
            </DialogContent>
          </Dialog>
        </div>
        {isLoadingUser ? (
          <SupplierLoadingSpinner />
        ) : profile?.companies?.company_subcontractors?.length > 0 ? (
          <UserTable
            rows={profile?.companies?.company_subcontractors}
            columns={employeeColumn}
            redirectLink={`/contractor/subcontractor/`}
          />
        ) : (
          <div className="place-content-center text-center">
            <h6>You have no Subcontractors</h6>
          </div>
        )}
      </div>
    </div>
  );
}

export default SubContractors;
