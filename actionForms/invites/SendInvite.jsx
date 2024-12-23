"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import FormInput from "../formStructures/FormInput";
import { sendInvite } from "@/services/invites";
import { Button } from "@/app/components/ui/button";
import { Loader2 } from "lucide-react";

function SendInvite({ handleCloseModal, company }) {
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
          await sendInvite(values, axios);
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
      {({ setFieldValue }) => (
        <Form>
          <FormInput
            name="email"
            label="Enter Employee Email"
            type="email"
            placeholder="Enter email"
          />

          <Button
            type="submit"
            className="btn contractor-btn mt-3"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Invite"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default SendInvite;
