"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import Image from "next/image";
import FormInput from "@/actionForms/formStructures/FormInput";
import { updateBranch } from "@/services/branches";
import { CircleUser, Loader2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";

function UpdateBranch({ branch, refetchBranch, isLoading }) {
  const axios = useAxiosAuth();
  const [loading, setLoading] = useState(false);
  if (isLoading) {
    return (
      <div className="h-[80vh] grid place-content-center">
        {" "}
        <Loader2 className="animate-spin" />{" "}
      </div>
    );
  }

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
      {({ setFieldValue, values }) => (
        <Form>
          <section className="py-3">
            <h2 className="text-xl font-semibold">Branch Information</h2>
            <div className="border mt-3 rounded-xl px-4 py-6">
              <div>
                {branch?.logo ? (
                  <Image
                    src={branch?.logo}
                    alt="logo"
                    width={60}
                    height={60}
                    className="rounded-full w-[60px] h-[60px] object-cover"
                  />
                ) : (
                  <CircleUser
                    strokeWidth={1}
                    className="size-[50px] text-[#b0b0b0]"
                  />
                )}
              </div>
              <div>
                <input
                  type="file"
                  className="form-control form-control-sm"
                  onChange={(event) => {
                    setFieldValue("logo", event.currentTarget.files[0]);
                  }}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormInput
                label="Branch Name"
                name="name"
                type="text"
                placeholder={branch?.name || "Enter branch name"}
              />
              <FormInput
                label="Branch Email"
                name="email"
                type="email"
                placeholder={branch?.email || "Enter branch email"}
              />
              <FormInput
                label="Branch Phone"
                name="phone"
                type="text"
                placeholder={branch?.phone || "Enter branch phone"}
              />
              <FormInput
                label="Branch Address"
                name="address"
                type="text"
                placeholder={branch?.address || "Enter branch address"}
              />
              <FormInput
                label="Branch Location"
                name="location"
                type="text"
                placeholder={branch?.location || "Enter branch location"}
              />
            </div>
            <Button
              type="submit"
              className="mt-4 bg-blue900 hover:bg-blue700"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" /> : "Update"}
            </Button>
          </section>
        </Form>
      )}
    </Formik>
  );
}

export default UpdateBranch;
