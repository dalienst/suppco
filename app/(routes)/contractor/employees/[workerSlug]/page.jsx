"use client";
import React from "react";
import UpdateWorker from "@/actionForms/workers/UpdateWorker";
import { useRouter } from "next/navigation";
import { useFetchWorkerDetail } from "@/dataActions/workers/workersActions";

function EmployeeDetail({ params: { workerSlug } }) {
  // FIXME: The workerSlug is referencing the logged in user id instead of the worker id
  // This is because the workerSlug is not being passed to the EmployeeDetail component
  // Ideally, the workerSlug should be a slug not an ID and should be passed to the EmployeeDetail component
  const {
    isLoading: isLoadingWorker,
    data: worker,
    refetch: refetchWorker,
  } = useFetchWorkerDetail(workerSlug);
console.log(worker)
  if (isLoadingWorker) {
    return (
      <section
        className="p-2 mt-3 d-flex justify-content-center align-items-center flex-column"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }

  return (
          <div className="p-4">
            <h1 className="text-lg font-semibold">Employee Details</h1>
            <p className="">
              <strong>Email:</strong> {worker?.email}
            </p>
            {worker?.user?.first_name === null ? (
              <p className="card-text">
                Employee has not updated their profile.
              </p>
            ) : (
              <>
                <p className="card-text">
                  <strong>First Name:</strong> {worker?.user?.first_name}
                </p>
                <p className="card-text">
                  <strong>Last Name:</strong> {worker?.user?.last_name}
                </p>
                <p className="card-text">
                  <strong>Phone:</strong> {worker?.user?.phone}
                </p>
                <p className="card-text">
                  <strong>Identification:</strong>{" "}
                  {worker?.user?.identification}
                </p>
                <p className="card-text">
                  <strong>KRA Pin:</strong> {worker?.user?.kra_pin}
                </p>
                <p className="card-text">
                  <strong>Location:</strong> {worker?.user?.phone}
                </p>
              </>
            )}

            <UpdateWorker worker={worker} refetchWorker={refetchWorker} />
          </div>
  );
}

export default EmployeeDetail;
