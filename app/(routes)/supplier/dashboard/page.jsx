"use client";
import React, { useEffect, useState } from "react";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import useUserId from "@/hooks/useUserId";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/accounts";
import Link from "next/link";
// import Modal from "react-bootstrap/Modal";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import Image from "next/image";
import { getBranches } from "@/services/branches";
import AddBranch from "@/actionForms/branches/AddBranch";
import BranchTable from "@/components/supplier/BranchTable";
import UserTable from "@/components/tables/InfoTable";
import { companyBranchesColumn } from "@/data/columns";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";

function SupplierDashboard() {
  const axios = useAxiosAuth();
  const userId = useUserId();

  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);

  const { isLoading: isLoadingUser, data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUser(userId, axios),
  });

  const {
    isLoading: isLoadingBranch,
    data: branches,
    refetch: refetchBranches,
    isSuccess,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: () => getBranches(axios),
  });
  useEffect(() => {
    if (isSuccess) {
      const rows = branches?.map((obj) => {
        return {
          ...obj,
          id: obj.slug,
        };
      });
      setRows(rows);
    }
  }, [branches, isSuccess]);

  if (isLoadingUser) {
    return <SupplierLoadingSpinner />;
  }

  return (
    <>
      {profile?.companies?.name !== null && (
        <div className="pt-7 px-2 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="border p-4 rounded-xl flex items-center gap-4">
              <div>
                {profile?.companies?.logo ? (
                  <Image
                    src={profile?.companies?.logo}
                    alt="Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="border rounded-full"
                  />
                )}
              </div>
              <div>
                <span>
                  {profile?.companies?.name}
                </span>
              </div>
            </div>

            <div className="border p-4 rounded-xl flex items-center gap-4">
              <Image
                src="/branches.png"
                alt="Branches"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-grow space-x-4">
                <span>
                  {profile?.companies?.company_branches?.length}
                </span>
                <span>Branches</span>
              </div>
            </div>

            <div className="border p-4 rounded-xl flex items-center gap-4">
              <Image
                src="/employees.png"
                alt="Employees"
                width={40}
                height={40}
                className="supplier-sidebar-border"
                style={{ borderRadius: "50%", objectFit: "contain" }}
              />
              <div className="flex-grow space-x-4">
                <span>
                  {profile?.companies?.company_employees?.length}
                </span>
                <span className="">Employees</span>
              </div>
            </div>
          </div>

          <section className="mt-5">
            <hr />
            <div className="flex justify-between my-4">
              <h2 className="font-semibold text-lg">Your Company&apos;s Branches</h2>
              <div>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className='text-blue900 bg-blue-50 border-blue-200'>+ Add Branch</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add a branch</DialogTitle>
                    </DialogHeader>
                    {profile?.companies && (
                      <AddBranch
                        refetch={refetchBranches}
                        company={profile?.companies}
                        onOpenChange={setOpen}
                      />
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="">
              {isLoadingBranch ? (
                <SupplierLoadingSpinner />
              ) : branches && branches.length > 0 ? (
                <>
                  {/* <BranchTable
                        branches={branches}
                        refetch={refetchBranches}
                        company={profile?.companies}
                      /> */}
                  <UserTable rows={rows} columns={companyBranchesColumn} />
                </>
              ) : (
                <p className="text-center text-bg-warning rounded p-2">
                  No branches found. Click Add to create one
                </p>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default SupplierDashboard;