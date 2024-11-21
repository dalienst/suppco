"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { Formik } from "formik";
import React, { useState } from "react";

function AddAggregate({ branch }) {
  const [loading, isLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
    <Formik
      initialValues={{
        branch: branch?.reference,
      }}
    ></Formik>
  );
}

export default AddAggregate;
