"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth'
import { updateSite } from '@/services/sites';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import FormInput from '../formStructures/FormInput';

function UpdateSite({ site, refetchSite }) {
    const axios = useAxiosAuth();
    const [loading, setLoading] = useState(false);

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
                <Form>
                    <section id="profile">
                        <h6 className="card-title">Site Profile</h6>
                        {/* <div className="d-flex gap-3 align-items-center mb-3">
                            <div>
                                {site?.logo ? (
                                    <Image
                                        src={site?.logo}
                                        alt="logo"
                                        width={60}
                                        height={60}
                                        className="supplier-sidebar-border"
                                        style={{ borderRadius: "50%", objectFit: "cover" }}
                                    />
                                ) : (
                                    <Image
                                        src="/prof.jpg"
                                        alt="logo"
                                        width={60}
                                        height={60}
                                        className="supplier-sidebar-border"
                                        style={{ borderRadius: "50%", objectFit: "cover" }}
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
                        </div> */}

                        <div className="row">
                            <div className="col-md-6 col-sm-12 mb-3">
                                <FormInput label="Site Name" name="name" type="text" placeholder={site?.name || "Enter site name"} />
                            </div>

                            <div className="col-md-6 col-sm-12 mb-3">
                                <FormInput label="Site Email" name="email" type="email" placeholder={site?.email || "Enter site email"} />
                            </div>

                            <div className="col-md-6 col-sm-12 mb-3">
                                <FormInput label="Site Address" name="address" type="text" placeholder={site?.address || "Enter site address"} />
                            </div>

                            <div className="col-md-6 col-sm-12 mb-3">
                                <FormInput label="Site Phone" name="phone" type="text" placeholder={site?.phone || "Enter site phone"} />
                            </div>
                        </div>
                    </section>

                    <button
                        type="submit"
                        className="btn contractor-btn mt-3"
                        disabled={loading}
                    >
                        {loading ? (
                            <div
                                className="spinner-border spinner-border-sm text-success"
                                role="status"
                            >
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : (
                            "Update"
                        )}
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default UpdateSite