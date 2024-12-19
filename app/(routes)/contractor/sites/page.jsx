'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/app/components/ui/dialog";
  import { Button } from "@/app/components/ui/button";
  import AddSite from "@/actionForms/sites/AddSite";
  import { getSites } from "@/services/sites";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import UserTable from "@/components/tables/InfoTable";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getUser } from "@/services/accounts";
import { companyBranchesColumn } from "@/data/columns";

function Site() {
    const axios = useAxiosAuth();
      const [open, setOpen] = useState(false);
      const [rows, setRows] = useState([]);

      const { isLoading: isLoadingUser, data: profile } = useQuery({
          queryKey: ["profile"],
          queryFn: () => getUser(userId, axios),
        });
    
    const {
        isLoading: isLoadingSite,
        data: sites,
        refetch: refetchSites,
        isSuccess,
      } = useQuery({
        queryKey: ["sites"],
        queryFn: () => getSites(axios),
      });
    
    useEffect(() => {
        if (isSuccess) {
          const rows = sites?.map((obj) => {
            return {
              ...obj,
              id: obj.slug,
            };
          });
          setRows(rows);
        }
      }, [sites, isSuccess]);
    
      if (isLoadingSite) return <SupplierLoadingSpinner />;
  return (
    <section className="p-5">
            <div className="flex justify-between my-4">
              <h2 className="font-semibold text-lg">
                Your Company&apos;s Sites
              </h2>
              <div>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="text-blue900 bg-blue-50 border-blue-200"
                    >
                      + Add Site
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add a site</DialogTitle>
                    </DialogHeader>
                    {profile?.companies && (
                      <AddSite
                        refetch={refetchSites}
                        company={profile?.companies}
                        onOpenChange={setOpen}
                      />
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="">
              {isLoadingSite ? (
                <SupplierLoadingSpinner />
              ) : sites && sites.length > 0 ? (
                <UserTable rows={rows} columns={companyBranchesColumn} redirectLink='/contractor/sites' />
              ) : (
                <p className="text-center text-bg-warning rounded p-2">
                  No sites found. Click Add to create one.
                </p>
              )}
            </div>
          </section>
  )
}

export default Site