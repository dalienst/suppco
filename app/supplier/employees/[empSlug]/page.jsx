"use client";
import UpdateEmployee from "@/actionForms/employee/UpdateEmployee";
import { useFetchEmployeeDetail } from "@/dataActions/employees/employeesActions";
import { useRouter } from "next/navigation";
import React from "react";


function EmployeeDetail({ params: { empSlug } }) {
  const router = useRouter();
  const {
    isLoading: isLoadingEmployee,
    data: employee,
    refetch: refetchEmployee,
  } = useFetchEmployeeDetail(empSlug);

  if (isLoadingEmployee) {
    return (
      <section
        className="p-2 mt-3 d-flex justify-content-center align-items-center flex-column"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="min-vh-100">
        <div className="card bg-white mt-3">
          <div className="card-header bg-white d-flex justify-content-between align-content-center">
            <div className="d-flex gap-3 align-items-center flex-row">
              <button
                className="btn btn-sm"
                onClick={() => router.back()}
              >
                <i className="bi bi-arrow-left text-success"></i>
              </button>
              <h5 className="card-title">{employee?.reference}</h5>
            </div>
          </div>

          <div className="card-body">
            <h6 className="card-title">Employee Details</h6>
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
    </>
  );
}

export default EmployeeDetail;
