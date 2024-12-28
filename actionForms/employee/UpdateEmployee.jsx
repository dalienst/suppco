"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { updateEmployee } from "@/services/employees";
import { Button } from "@/app/components/ui/button";
import { Loader2 } from "lucide-react";

function UpdateEmployee({ employee, refetchEmployee }) {
  const axios = useAxiosAuth();
  const [loading, setLoading] = useState(false);
  return (
    <Formik
      enableReinitialize
      initialValues={{
        is_admin: employee?.is_admin || false,
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const formData = new FormData();
          formData.append("is_admin", values.is_admin);

          await updateEmployee(formData, employee?.slug, axios);
          toast.success("Employee updated successfully. Refreshing...");
          setLoading(false);
          refetchEmployee();
        } catch (error) {
          toast?.error("Failed to update employee");
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className="m-2">
          <div className="mb-2">
            <Field
              type="checkbox"
              role="switch"
              id="is_admin"
              name="is_admin"
              checked={values.is_admin}
              onChange={() => setFieldValue("is_admin", !values.is_admin)}
            />
            <label htmlFor="is_admin" className="pl-2">
              Admin Status
            </label>
          </div>

          <Button
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="animate-spin"/>
            ) : (
              "Update"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default UpdateEmployee;
