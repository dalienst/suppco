"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth'
import { updateSite } from '@/services/sites';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import FormInput from '../formStructures/FormInput';
import { CircleUser, Loader2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

function UpdateSite({ isLoading, site, refetchSite }) {
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
                name: site?.name || "",
                email: site?.email || "",
                address: site?.address || "",
                phone: site?.phone || "",
                // adding employees coming soon
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
                    formData?.append("address", values?.address);
                    formData?.append("phone", values?.phone);
                    await updateSite(site?.slug, formData, axios);
                    toast.success("Site updated successfully. Refreshing...");
                    refetchSite();
                } catch (error) {
                    toast?.error("Failed to update site");
                } finally {
                    setLoading(false);
                }
            }}
        >
            {({ values, setFieldValue }) => (
                <Form className="p-3">
                    <section>
                    <h2 className="text-xl font-semibold">Site Information</h2>
            <div className="border mt-3 rounded-xl px-4 py-6">
              <div>
                {site?.logo ? (
                  <Image
                    src={site?.logo}
                    alt="logo"
                    width={60}
                    height={60}
                    className="rounded-full"
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
                                <FormInput label="Site Name" name="name" type="text" placeholder={site?.name || "Enter site name"} />

                                <FormInput label="Site Email" name="email" type="email" placeholder={site?.email || "Enter site email"} />

                                <FormInput label="Site Address" name="address" type="text" placeholder={site?.address || "Enter site address"} />

                                <FormInput label="Site Phone" name="phone" type="text" placeholder={site?.phone || "Enter site phone"} />
                        </div>
                    </section>

                   <Button
                                 type="submit"
                                 className="mt-4 bg-jungle800 hover:bg-jungle700"
                                 disabled={loading}
                               >
                                 {loading ? <Loader2 className="animate-spin" /> : "Update"}
                               </Button>
                </Form>
            )}
        </Formik>
    )
}

export default UpdateSite