"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth';
import { createSiteEquipment } from '@/services/siteEquipment';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function AddBracketSiteEquipment({ bracket, company, handleCloseModal, refetchSite }) {
    const [loading, setLoading] = useState(false)
    const axios = useAxiosAuth();

    return (
        <Formik
            initialValues={{
                bracket: bracket?.name,
                source_location: "",
                company: company?.reference,
                image: null,
                product_name: "",

            }}
            onSubmit={async (values) => {
                setLoading(true);
                try {
                    const formData = new FormData();
                    formData.append("bracket", values.bracket);
                    formData.append("source_location", values.source_location);
                    formData.append("company", values.company);
                    if (values.image) {
                        formData.append("image", values.image);
                    }
                    formData.append("product_name", values.product_name);
                    await createSiteEquipment(formData, axios);
                    toast.success("Site Equipment created successfully. Refreshing...");
                    setLoading(false);
                    handleCloseModal();
                    refetchSite();
                } catch (error) {
                    toast?.error("Failed to create Site equipment")
                } finally {
                    setLoading(false);
                }
            }}
        >
            {({ setFieldValue }) => (
                <Form>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input
                            type="file"
                            className="form-control"
                            id="image"
                            name="image"
                            onChange={(event) => {
                                setFieldValue("image", event?.target?.files[0]);
                            }}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="source_location" className="form-label">Source Location</label>
                        <Field type="text" className="form-control" id="source_location" name="source_location" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="product_name" className="form-label">Product Name</label>
                        <Field type="text" className="form-control" id="product_name" name="product_name" />
                    </div>

                    <button
                        type="submit"
                        className="btn supplier-btn mt-3"
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
                            "Create"
                        )}
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default AddBracketSiteEquipment