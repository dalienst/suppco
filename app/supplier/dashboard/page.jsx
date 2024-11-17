"use client";
import React, { useState } from "react";
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
import ProfileWarning from "@/components/supplier/ProfileWarning";

function SupplierDashboard() {
  const axios = useAxiosAuth();
  const userId = useUserId();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const { isLoading: isLoadingUser, data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUser(userId, axios),
  });

  const {
    isLoading: isLoadingBranch,
    data: branches,
    refetch: refetchBranches,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: () => getBranches(axios),
  });

  if (isLoadingUser) {
    return <SupplierLoadingSpinner />;
  }

  return (
      <div>
        {profile?.companies?.name !== null && (
            <div>
              <div className="row">
                <div className="col-md-4 col-sm-12 mb-3">
                  <section className="mt-3 card h-100">
                    <div className="card-body">
                      {profile?.companies?.logo ? (
                        <Image
                          src={profile?.companies?.logo}
                          alt="Logo"
                          width={40}
                          height={40}
                          className="supplier-sidebar-border"
                          style={{ borderRadius: "50%", objectFit: "cover" }}
                        />
                      ) : (
                        <Image
                          src="/logo.png"
                          alt="Logo"
                          width={40}
                          height={40}
                          className="supplier-sidebar-border"
                          style={{ borderRadius: "50%", objectFit: "contain" }}
                        />
                      )}
                      <h5 className="card-title mb-1 mt-2">
                        {profile?.companies?.name}
                      </h5>
                      <p className="card-text mb-1">
                        {profile?.companies?.email}
                      </p>
                      <p className="card-text">{profile?.companies?.phone}</p>
                    </div>
                  </section>
                </div>

                <div className="col-md-4 col-sm-12 mb-3">
                  <section className="mt-3 card h-100">
                    <div className="card-body">
                      <Image
                        src="/branches.png"
                        alt="Branches"
                        width={40}
                        height={40}
                        className="supplier-sidebar-border"
                        style={{ borderRadius: "50%", objectFit: "contain" }}
                      />
                      <h5 className="card-title mb-1 mt-2">Branches</h5>
                      <p className="card-text">
                        {profile?.companies?.company_branches?.length}
                      </p>
                    </div>
                  </section>
                </div>

                <div className="col-md-4 col-sm-12 mb-3">
                  <section className="mt-3 card h-100">
                    <div className="card-body">
                      <Image
                        src="/employees.png"
                        alt="Employees"
                        width={40}
                        height={40}
                        className="supplier-sidebar-border"
                        style={{ borderRadius: "50%", objectFit: "contain" }}
                      />
                      <h5 className="card-title mb-1 mt-2">Employees</h5>
                      <p className="card-text">
                        {profile?.companies?.company_employees?.length}
                      </p>
                    </div>
                  </section>
                </div>
              </div>

              <section className="mt-3 mb-3 card">
                <div className="card-header d-flex justify-content-between align-content-center">
                  <h5>Company Branches</h5>
                  <div>
                    <button
                      onClick={handleShow}
                      className="supplier-btn btn btn-sm"
                    >
                      Add
                    </button>

                    {/* Modal for adding company */}
                    {/* <Modal
                      show={show}
                      onHide={handleClose}
                      dialogClassName="modal-dialog"
                    >
                      <div className="modal-header">
                        <h5 className="modal-title">Add New Branch</h5>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={handleClose}
                        ></button>
                      </div>
                      <div className="modal-body">
                        {profile?.companies && (
                          <AddBranch
                            refetch={refetchBranches}
                            handleCloseModal={handleClose}
                            company={profile?.companies}
                          />
                        )}
                      </div>
                    </Modal> */}
                    {/* end of modal */}
                  </div>
                </div>

                <div className="card-body">
                  {isLoadingBranch ? (
                    <SupplierLoadingSpinner />
                  ) : branches && branches.length > 0 ? (
                    <>
                      <BranchTable
                        branches={branches}
                        refetch={refetchBranches}
                        company={profile?.companies}
                      />
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
      </div>
  );
}

export default SupplierDashboard;
