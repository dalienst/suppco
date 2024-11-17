"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { updateWorkerDetail } from "@/services/workers";

function UpdateWorker({ worker, refetchWorker }) {
  const axios = useAxiosAuth();
  const [loading, setLoading] = useState(false);
  return (
    <Formik
      enableReinitialize
      initialValues={{
        is_admin: worker?.is_admin || false,
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const formData = new FormData();
          formData.append("is_admin", values.is_admin);

          await updateWorkerDetail(formData, worker?.slug, axios);
          toast.success("Worker updated successfully. Refreshing...");
          setLoading(false);
          refetchWorker();
        } catch (error) {
          toast?.error("Failed to update worker");
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <div className="mb-3 form-check form-switch">
            <Field
              type="checkbox"
              role="switch"
              id="is_admin"
              name="is_admin"
              className="form-check-input"
              checked={values.is_admin}
              onChange={() => setFieldValue("is_admin", !values.is_admin)}
            />
            <label htmlFor="is_admin" className="form-label">
              Admin Status
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-sm btn-outline-info mt-3"
            disabled={loading}
          >
            {loading ? (
              <div
                className="spinner-border spinner-border-sm text-info"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Update"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default UpdateWorker;
