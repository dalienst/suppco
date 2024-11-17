"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { sendInvitation } from "@/services/invitation";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import FormInput from "../formStructures/FormInput";

function SendInvitation({ handleCloseModal, company }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
    <Formik
      initialValues={{
        company: company?.name,
        email: "",
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          await sendInvitation(values, axios);
          toast?.success("Invitation sent successfully. Refreshing page...");
          handleCloseModal();
          setLoading(false);
        } catch (error) {
          toast?.error("Failed to send invitation");
          setLoading(false);
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <FormInput
            name="email"
            label="Enter Employee Email"
            type="email"
            placeholder="Enter email"
          />

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
  );
}

export default SendInvitation;
