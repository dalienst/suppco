"use client";
import UpdateEmployee from "@/actionForms/employee/UpdateEmployee";
import { Button } from "@/app/components/ui/button";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import { useFetchEmployeeDetail } from "@/dataActions/employees/employeesActions";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function EmployeeDetail({ params: { empSlug } }) {
  const router = useRouter();
  const {
    isLoading: isLoadingEmployee,
    data: employee,
    refetch: refetchEmployee,
  } = useFetchEmployeeDetail(empSlug);
  console.log(employee, "from employee slug page");
  if (isLoadingEmployee) {
    return <SupplierLoadingSpinner />;
  }

  return (
    <div className="p-3">
      <div className="">
        <Button variant="outline" onClick={() => router.back()}>
          <ChevronLeft /> Back
        </Button>

        <div className="mt-3">
          <h1 className="font-semibold text-lg">Employee Details</h1>
          <div className="border rounded-lg p-3">
            <p className="mb-1">
              <span className="font-medium text-lg block mb-1">Email</span>
              <span className="border p-2 rounded-lg">{employee?.email}</span>
            </p>
            {employee?.user?.first_name === null ? (
              <div className="bg-red-50 border border-red-400 rounded-xl px-2 py-4 m-6">
                <p className="text-lg">
                  Your employee is yet to setup their account.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="card-text">
                  <span className="font-medium text-lg block mb-1">Name</span>
                  <span className="border p-2 rounded-lg ">
                    {employee?.user?.first_name} {employee?.user?.last_name}
                  </span>
                </p>
                <p className="card-text">
                  <span className="font-medium text-lg block mb-1">Phone</span>
                  <span className="border p-2 rounded-lg ">
                    {employee?.user?.phone ? `${employee?.user?.phone}` : "NA"}
                  </span>
                </p>
                <p className="card-text">
                  <span className="font-medium text-lg block mb-1">
                    Identification
                  </span>
                  <span className="border p-2 rounded-lg ">
                    {employee?.user?.identification
                      ? `${employee?.user?.identification}`
                      : "NA"}
                  </span>
                </p>
                <p className="card-text">
                  <span className="font-medium text-lg block mb-1">
                    KRA Pin
                  </span>
                  <span className="border p-2 rounded-lg ">
                    {employee?.user?.kra_pin
                      ? `${employee?.user?.kra_pin}`
                      : "NA"}
                  </span>
                </p>
              </div>
            )}
          </div>

          <UpdateEmployee
            employee={employee}
            refetchEmployee={refetchEmployee}
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetail;
