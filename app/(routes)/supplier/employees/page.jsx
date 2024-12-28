"use client";
import useFetchProfile from "@/dataActions/accounts/FetchProfile";
import { useEffect, useState } from "react";
import SendInvitation from "@/actionForms/invitation/SendInvitation";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover";
import { Ellipsis } from "lucide-react";
import Link from "next/link";

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
            {profile?.companies?.company_employees?.map((worker)=>(
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
                  href={`/supplier/employees/${worker?.user?.slug}`}
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
