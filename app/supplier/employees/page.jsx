"use client";
import ProfileWarning from "@/components/supplier/ProfileWarning";
import useFetchProfile from "@/dataActions/accounts/FetchProfile";
import Link from "next/link";
import React, { useState } from "react";
import SendInvitation from "@/actionForms/invitation/SendInvitation";
import FormModals from "@/components/forms/FormModals";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import EmployeesTable from "@/components/supplier/EmployeesTable";

function Employees() {
  const {
    isLoading: isLoadingUser,
    data: profile,
    refetch: refetchProfile,
  } = useFetchProfile();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  if (isLoadingUser) {
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
    <div className="min-vh-100">
      <nav aria-label="breadcrumb mb-3 mt-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/supplier/dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Employees
          </li>
        </ol>
      </nav>

      <ProfileWarning profile={profile} />

      <section className="mb-3 mt-3">
        <h3>Employees Management - {profile?.companies?.name}</h3>
        <p>Manage your employees</p>
      </section>

      <section className="mb-3 card">
        <div className="card-header bg-white d-flex flex-md-row flex-column justify-content-between">
          <h5 className="card-title">List</h5>
          <button
            onClick={handleShow}
            className="btn btn-sm btn-outline-success"
          >
            Invite Employees
          </button>

          <FormModals
            title="Invite Employee"
            show={show}
            handleClose={handleClose}
          >
            {profile?.companies && (
              <SendInvitation
                handleCloseModal={handleClose}
                company={profile?.companies}
              />
            )}
          </FormModals>
        </div>

        <div className="card-body">
          {isLoadingUser ? (
            <SupplierLoadingSpinner />
          ) : profile?.companies?.company_employees?.length > 0 ? (
            <EmployeesTable employees={profile?.companies?.company_employees} />
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
