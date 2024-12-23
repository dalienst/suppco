"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import FormInput from "../formStructures/FormInput";
import { sendSubContractorInvite } from "@/services/subcontractorInvite";
import { Button } from "@/app/components/ui/button";
import { Loader2 } from "lucide-react";

function SubContractorInvite({ handleCloseModal, company, sites }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();
  return (
    <Formik
      initialValues={{
        company: company?.name,
        email: "",
        site: "",
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const formData = new FormData();
          formData.append("site", values.site);
          formData.append("company", values.company);
          formData.append("email", values.email);
          await sendSubContractorInvite(formData, axios);
          toast?.success("Invite sent successfully. Refreshing page...");
          handleCloseModal();
          setLoading(false);
        } catch (error) {
          toast?.error("Failed to send invite");
          setLoading(false);
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <FormInput
            name="email"
            label="Enter Employee Email"
            type="email"
            placeholder="Enter email"
          />
          <div>
            <div className="flex justify-between items-center pt-3">
              <span className="text-lg underline">
                Allocate site(s) to subcontractor:
              </span>
            </div>
            <Field as="select" name="site" className="p-2 rounded-lg">
              <option value="">Select a site </option>
              {sites?.map((site) => (
                <option key={site?.reference} value={site?.reference}>
                  {site?.name}-{site?.address}
                </option>
              ))}
            </Field>
          </div>

          <Button type="submit" className="mt-3" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : "Invite"}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default SubContractorInvite;
