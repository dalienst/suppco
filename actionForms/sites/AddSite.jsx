import { Button } from "@/app/components/ui/button";
import { Label } from "@/app/components/ui/label";
import ContractorLoadingSpinner from "@/components/contractor/LoadingSpinner";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createSite } from "@/services/sites";
import { Field, Form, Formik } from "formik";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

function AddSite({ refetch,company, onOpenChange }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
    <Formik
      initialValues={{
        company: company?.reference,
        name: "",
        address: "",
        phone: "",
        logo: null,
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const formData = new FormData();
          formData.append("company", company?.reference);
          formData.append("name", values.name);
          formData.append("address", values.address);
          formData.append("phone", values.phone);
          if (values.logo) {
            formData.append("logo", values.logo);
          }

          await createSite(formData, axios);
          toast.success("Site created successfully. Refreshing page...");
          setLoading(false);
          onOpenChange();
          refetch();
        } catch (error) {
          toast.error("Failed to create site");
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ setFieldValue }) => (
        <Form className="space-y-2">
          <div className="border mt-3 rounded-xl px-4 py-6">
              <div>
                {company?.logo && (
                  <Image
                    src={branch?.logo}
                    alt="logo"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                )}
              </div>
              <div>
                <label htmlFor="logo" className={`mb-2 block ${company?.logo && 'hidden'}`}>Add site image</label>
                <input
                  type="file"
                  name="logo"
                  className="form-control form-control-sm"
                  onChange={(event) => {
                    setFieldValue("logo", event.currentTarget.files[0]);
                  }}
                />
              </div>
            </div>
           <div className="flex flex-col gap-1">
                        <Label htmlFor="name">Site Name</Label>
                        <Field
                          type="text"
                          required
                          name="name"
                          className="border rounded-lg p-2"
                        />
                      </div>
           <div className="flex flex-col gap-1">
                        <Label htmlFor="address">Site address</Label>
                        <Field
                          type="text"
                          required
                          name="address"
                          className="border rounded-lg p-2"
                        />
                      </div>
           <div className="flex flex-col gap-1">
                        <Label htmlFor="phone">Site phone</Label>
                        <Field
                          type="text"
                          required
                          name="phone"
                          className="border rounded-lg p-2"
                        />
                      </div>

                      <Button
              type="submit"
              className="bg-jungle800 hover:bg-jungle600"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Create"
              )}
            </Button>
        </Form>
      )}
    </Formik>
  );
}

export default AddSite;
