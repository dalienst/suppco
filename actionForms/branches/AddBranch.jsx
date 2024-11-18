"use client";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createBranch } from "@/services/branches";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";

function AddBranch({ refetch, onOpenChange, company }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
    <>
      <Formik
        initialValues={{
          company: company?.slug,
          name: "",
          email: "",
          phone: "",
          address: "",
          location: "",
        }}
        onSubmit={async (values) => {
          setLoading(true);
          try {
            await createBranch(values, axios);
            toast?.success("Branch created successfully. Refreshing page.");
            setLoading(false);
            onOpenChange();
            refetch();
          } catch (error) {
            toast?.error("Failed to create branch");
            setLoading(false);
          } finally {
            setLoading(false);
          }
        }}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-2">
            <div className="flex flex-col gap-1">
              <Label htmlFor="name">Name</Label>
              <Field
                type="text"
                required
                name="name"
                className="border rounded-lg p-2"
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="email">Email</Label>
              <Field
                type="email"
                required
                name="email"
                className="border rounded-lg p-2"
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="phone">Phone</Label>
              <Field
                type="text"
                required
                name="phone"
                className="border rounded-lg p-2"
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="address">Address</Label>
              <Field
                type="text"
                required
                name="address"
                className="border rounded-lg p-2"
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label htmlFor="location">Location</Label>
              <Field
                type="text"
                required
                name="location"
                className="border rounded-lg p-2"
              />
            </div>

            <Button
              type="submit"
              className="bg-blue900 hover:bg-blue700"
              disabled={loading}
            >
              {loading ? (
                <span className="visually-hidden">Loading...</span>
              ) : (
                "Create"
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddBranch;
