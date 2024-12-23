"use client";
import UpdateEmployee from "@/actionForms/employee/UpdateEmployee";
import { Button } from "@/app/components/ui/button";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import { useFetchEmployeeDetail } from "@/dataActions/employees/employeesActions";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";


function EmployeeDetail({ params: { employeeSlug } }) {
  const router = useRouter();
  const {
    isLoading: isLoadingEmployee,
    data: employee,
    refetch: refetchEmployee,
  } = useFetchEmployeeDetail(employeeSlug);
  console.log(employee,'employee I want')

  if (isLoadingEmployee) {
    return (
      <SupplierLoadingSpinner/>
    );
  }

  return (
      <div>
        <div className="">
              <Button
                className=""
                onClick={() => router.back()}
              >
               <ChevronLeft/> Back
              </Button>

          <div className="">
            <h6 className="">Employee Details</h6>
            <p className="card-text">
              <strong>Email:</strong> {employee?.email}
            </p>
            {employee?.user?.first_name === null ? (
              <p className="card-text">
                Employee has not updated their profile.
              </p>
            ) : (
              <>
                <p className="card-text">
                  <strong>First Name:</strong> {employee?.user?.first_name}
                </p>
                <p className="card-text">
                  <strong>Last Name:</strong> {employee?.user?.last_name}
                </p>
                <p className="card-text">
                  <strong>Phone:</strong> {employee?.user?.phone}
                </p>
                <p className="card-text">
                  <strong>Identification:</strong>{" "}
                  {employee?.user?.identification}
                </p>
                <p className="card-text">
                  <strong>KRA Pin:</strong> {employee?.user?.kra_pin}
                </p>
                <p className="card-text">
                  <strong>Location:</strong> {employee?.user?.phone}
                </p>
              </>
            )}

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
