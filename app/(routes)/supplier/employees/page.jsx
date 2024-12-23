"use client";
import useFetchProfile from "@/dataActions/accounts/FetchProfile";
import { useEffect, useState } from "react";
import SendInvitation from "@/actionForms/invitation/SendInvitation";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { supplierEmployeeColumn } from "@/data/columns";
import UserTable from "@/components/tables/InfoTable";

function Employees() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);

  const {
    isLoading: isLoadingUser,
    data: profile,
    refetch: refetchProfile,
    isSuccess
  } = useFetchProfile();

  useEffect(() => {
    if (isSuccess) {
      const rows = profile?.companies?.company_employees?.map((obj) => {
        return {
          ...obj,
          id: obj.email,
        };
      });
      setRows(rows);
    }
  }, [profile, isSuccess]);

  if (isLoadingUser) {
    return (
      <SupplierLoadingSpinner/>
    );
  }

  return (
    <div className="py-6 px-2 md:p-6">
      <section>
        <div className="flex justify-between my-3">
          <h2 className="text-xl font-semibold">{profile?.companies?.name}&apos;s Employees</h2>
          <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className='text-blue900 bg-blue-50 border-blue-200'>+ Invite Employee</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Invite employee</DialogTitle>
                      <DialogDescription>Inviting an employee will add them to your dashboard</DialogDescription>
                    </DialogHeader>
                    {profile?.companies && (
                        <SendInvitation
                        onOpenChange={setOpen}
                        company={profile?.companies}
                        />
                    )}
                  </DialogContent>
                </Dialog>
        </div>

        <div>
          {isLoadingUser ? (
            <SupplierLoadingSpinner />
          ) : profile?.companies?.company_employees?.length > 0 ? (
            <UserTable rows={rows} columns={supplierEmployeeColumn} redirectLink="/supplier/employees" />
          ) : (
            <div className="text-center">
              <h6>You have no Employees</h6>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Employees;
