"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import Image from "next/image";
import FormInput from "@/actionForms/formStructures/FormInput";
import { updateBranch } from "@/services/branches";

function UpdateBranch({ branch, refetchBranch }) {
  const axios = useAxiosAuth();
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        logo: null,
        name: branch?.name || "",
        email: branch?.email || "",
        location: branch?.location || "",
        phone: branch?.phone || "",
        address: branch?.address || "",
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const formData = new FormData();
          if (values?.logo) {
            formData.append("logo", values?.logo);
          }
          formData?.append("name", values?.name);
          formData?.append("email", values?.email);
          formData?.append("location", values?.location);
          formData?.append("phone", values?.phone);
          formData?.append("address", values?.address);
          await updateBranch(formData, axios, branch?.slug);
          toast.success("Branch updated successfully. Refreshing...");
          setLoading(false);
          refetchBranch();
        } catch (error) {
          toast.error("Failed to update branch");
          setLoading(false);
          refetchBranch();
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ setFieldValue, values }) => <Form>{/* Add fields */}</Form>}
    </Formik>
  );
}

export default UpdateBranch;
