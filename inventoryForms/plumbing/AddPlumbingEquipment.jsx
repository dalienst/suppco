"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth';
import { createPlumbingEquipment } from '@/services/plumbing';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

function AddPlumbingEquipment({ item, company, handleCloseModal, refetchItem }) {
    const [loading, setLoading] = useState(false)
    const axios = useAxiosAuth();

    return (
        <Formik
            initialValues={{
                item: item?.name,
                company: company?.reference,
                source_location: "",
                image: null,
                type: "",
                quantity: "",

            }}
            onSubmit={async (values) => {
                setLoading(true);
                try {
                    const formData = new FormData();
                    formData.append("item", values.item);
                    formData.append("company", values.company);
                    formData.append("source_location", values.source_location);
                    if (values.image) {
                        formData.append("image", values.image);
                    }
                    formData.append("type", values.type);
                    formData.append("quantity", values.quantity);

                    await createPlumbingEquipment(formData, axios);
                    toast.success("Plumbing Equipment created successfully. Refreshing...");
                    setLoading(false);
                    handleCloseModal();
                    refetchItem();
                } catch (error) {
                    toast?.error("Failed to create Plumbing equipment")
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
                        <label htmlFor="type" className="form-label">Type</label>
                        <Field type="text" className="form-control" id="type" name="type" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <Field type="text" className="form-control" id="quantity" name="quantity" />
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

export default AddPlumbingEquipment