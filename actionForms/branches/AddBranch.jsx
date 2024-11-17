"use client";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createBranch } from "@/services/branches";

function AddBranch({ refetch, handleCloseModal, company }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
    <>
      <Formik
        initialValues={{
          company: company?.reference,
          name: "",
          email: "",
          phone: "",
          address: "",
          location: "",
        }}
        onSubmit={async (values) => {
          setLoading(true);
          try {
            await createBranch(values, axios);
            toast?.success("Branch created successfully. Refreshing page.");
            setLoading(false);
            handleCloseModal();
            refetch();
          } catch (error) {
            toast?.error("Failed to create branch");
            setLoading(false);
          } finally {
            setLoading(false);
          }
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">
                Name
              </label>
              <Field type="text" name="name" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <Field type="email" name="email" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label fw-semibold">
                Phone
              </label>
              <Field type="text" name="phone" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label fw-semibold">
                Address
              </label>
              <Field type="text" name="address" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label fw-semibold">
                Location
              </label>
              <Field type="text" name="location" className="form-control" />
            </div>

            <button
              type="submit"
              className="btn supplier-btn mt-3"
              disabled={loading}
            >
              {loading ? (
                <div
                  className="spinner-border spinner-border-sm text-success"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Create"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddBranch;
