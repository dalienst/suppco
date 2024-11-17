import ContractorLoadingSpinner from "@/components/contractor/LoadingSpinner";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createSite } from "@/services/sites";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function AddSite({ refetch, handleCloseModal, company }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
    <Formik
      initialValues={{
        company: company?.reference,
        name: "",
        address: "",
        phone: "",
        logo: null,
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const formData = new FormData();
          formData.append("company", values.company);
          formData.append("name", values.name);
          formData.append("address", values.address);
          formData.append("phone", values.phone);
          if (values.logo) {
            formData.append("logo", values.logo);
          }

          await createSite(formData, axios);
          toast.success("Site created successfully. Refreshing page...");
          setLoading(false);
          handleCloseModal();
          refetch();
        } catch (error) {
          toast.error("Failed to create site");
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <div className="mb-3">
            <label htmlFor="logo" className="form-label">
              Site Logo
            </label>
            <input
              type="file"
              name="logo"
              className="form-control"
              onChange={(event) => {
                setFieldValue("logo", event.currentTarget.files[0]);
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Site Name
            </label>
            <Field type="text" name="name" className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Site Address
            </label>
            <Field type="text" name="address" className="form-control" />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Site Phone
            </label>
            <Field type="text" name="phone" className="form-control" />
          </div>

          <button
            type="submit"
            className="btn contractor-btn mt-3"
            disabled={loading}
          >
            {loading ? (
              <div
                className="spinner-border spinner-border-sm text-primary"
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
  );
}

export default AddSite;
