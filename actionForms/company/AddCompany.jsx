"use client";

import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createCompany } from "@/services/companies";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function AddCompany({ refetch, handleCloseModal }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", phone: "", currency: "" }}
        onSubmit={async (values) => {
          setLoading(true);
          try {
            await createCompany(values, axios);
            toast.success("Company created successfully. Refreshing page...");
            setLoading(false);
            refetch();
            handleCloseModal();
          } catch (error) {
            if (error?.response?.data?.email) {
              toast.error("Company with this email already exists");
            } else if (error?.response?.data?.phone) {
              toast.error("Company with this phone number already exists");
            } else if (error?.response?.data?.name) {
              toast.error("Company with this name already exists");
            } else {
              toast.error("Failed to create company");
            }
          } finally {
            setLoading(false);
          }
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">
                Company Name
              </label>
              <Field type="text" name="name" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Company Email
              </label>
              <Field type="email" name="email" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label fw-semibold">
                Company Phone - include country code
              </label>
              <Field type="text" name="phone" className="form-control" />
            </div>

            <div className="mb-3">
              <label htmlFor="currency" className="form-label fw-semibold">
                Currency
              </label>
              <Field as="select" name="currency" className="form-select">
                <option value="">Select Currency</option>
                <option value="KES">KES - Kenyan Shilling</option>
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="ZAR">ZAR - South African Rand</option>
                <option value="NGN">NGN - Nigerian Naira</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="MXN">MXN - Mexican Peso</option>
                <option value="CHF">CHF - Swiss Franc</option>
              </Field>
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

export default AddCompany;
