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
  console.log(employee)
  return (
    <Formik
      enableReinitialize
      initialValues={{
        is_admin: employee?.is_admin || false,
        initiate_delivery:false,
        start_delivery:false,
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const formData = new FormData();
          formData.append("is_admin", values.is_admin);
          formData.append("initiate_delivery", values.initiate_delivery);
          formData.append("start_delivery", values.start_delivery);

          await updateEmployee(formData, employee?.user?.slug, axios);
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
          <div className="flex flex-wrap flex-col sm:flex-row sm:gap-4 mb-5">
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
          <div className="mb-2">
            <Field
              type="checkbox"
              role="switch"
              id="initiate_delivery"
              name="initiate_delivery"
              checked={values.initiate_delivery}
              onChange={() => setFieldValue("initiate_delivery", !values.initiate_delivery)}
            />
            <label htmlFor="initiate_delivery" className="pl-2">
              Initiate delivery
            </label>
          </div>
          <div className="mb-2">
            <Field
              type="checkbox"
              role="switch"
              id="start_delivery"
              name="start_delivery"
              checked={values.start_delivery}
              onChange={() => setFieldValue("start_delivery", !values.start_delivery)}
            />
            <label htmlFor="start_delivery" className="pl-2">
              Start delivery
            </label>
          </div>
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
