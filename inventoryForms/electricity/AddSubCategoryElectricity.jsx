"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth';
import { createElectricityEquipment } from '@/services/electricity';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function AddSubCategoryElectricity({ subcategory, company, handleCloseModal, refetchElectricity }) {
    const [loading, setLoading] = useState(false)
    const axios = useAxiosAuth();

    return (
        <Formik
            initialValues={{
                sublayer: subcategory?.name,
                company: company?.reference,
                source_location: "",
                image: null,
                name: "",
                description: "",
            }}
            onSubmit={async (values) => {
                setLoading(true);
                try {
                    const formData = new FormData();
                    formData.append("sublayer", values.sublayer);
                    formData.append("company", values.company);
                    formData.append("source_location", values.source_location);
                    if (values.image) {
                        formData.append("image", values.image);
                    }
                    formData.append("name", values.name);
                    formData.append("description", values.description);
                    await createElectricityEquipment(formData, axios);
                    toast.success("Electricity Equipment created successfully. Refreshing...");
                    setLoading(false);
                    handleCloseModal();
                    refetchElectricity();
                } catch (error) {
                    toast?.error("Failed to create Electricity equipment");
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
                        <label htmlFor="name" className="form-label">Name</label>
                        <Field type="text" className="form-control" id="name" name="name" />
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

export default AddSubCategoryElectricity