"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { sendInvitation } from "@/services/invitation";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import FormInput from "../formStructures/FormInput";
import { Button } from "@/app/components/ui/button";

function SendInvitation({ onOpenChange, company }) {
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
          onOpenChange();
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
            label="Employee Email"
            type="email"
            placeholder="Enter employee email"
          />

          <Button
            type="submit"
            className='mt-10'
            disabled={loading}
          >
            {loading ? (
                <span>Sending invite...</span>
            ) : (
              "Send invite"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default SendInvitation;
