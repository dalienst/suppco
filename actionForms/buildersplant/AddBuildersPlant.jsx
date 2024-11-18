"use client"
import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import { createBuilderPlant } from '@/services/builderplants';
import useAxiosAuth from '@/hooks/useAxiosAuth';
import toast from 'react-hot-toast';

function AddBuildersPlant({ category, company, handleCloseModal, refetchCompany, refetchPlant }) {
    const [loading, setLoading] = useState(false);
    const axios = useAxiosAuth()
    return (
        <Formik
            initialValues={{
                type: category?.type,
                manufacturer: "",
                model: "",
                year: "",
                typeOfLease: "",
                ratePerHour: "",
                quantity: "",
                weightCapacity: "",
                liftingHeight: "",
                horsepower: "",
                boomLength: "",
                diggingDepth: "",
                bladeSize: "",
                bucketCapacity: "",
                tipperCapacity: "",
                demolitionSpecs: "",
                image: null,
                company: company?.reference,
            }}
            onSubmit={async (values) => {
                setLoading(true);
                try {
                    const formData = new FormData();
                    formData.append("type", values.type);
                    formData.append("manufacturer", values.manufacturer);
                    formData.append("model", values.model);
                    formData.append("year", values.year);
                    formData.append("typeOfLease", values.typeOfLease);
                    formData.append("ratePerHour", values.ratePerHour);
                    formData.append("quantity", values.quantity);
                    formData.append("weightCapacity", values.weightCapacity);
                    formData.append("liftingHeight", values.liftingHeight);
                    formData.append("horsepower", values.horsepower);
                    formData.append("boomLength", values.boomLength);
                    formData.append("diggingDepth", values.diggingDepth);
                    formData.append("bladeSize", values.bladeSize);
                    formData.append("bucketCapacity", values.bucketCapacity);
                    formData.append("tipperCapacity", values.tipperCapacity);
                    formData.append("demolitionSpecs", values.demolitionSpecs);
                    if (values.image) {
                        formData.append("image", values.image);
                    }
                    formData.append("company", values.company);

                    await createBuilderPlant(formData, axios);
                    toast.success("Builder Plant created successfully. Refreshing page...");
                    setLoading(false);
                    handleCloseModal();
                    refetchCompany();
                    refetchPlant();
                } catch (error) {
                    toast?.error("Failed to create builder plant")
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
                        <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
                        <Field type="text" name="manufacturer" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="model" className="form-label">Model</label>
                        <Field type="text" name="model" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="year" className="form-label">Year</label>
                        <Field type="text" name="year" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="typeOfLease" className="form-label">Type Of Lease</label>
                        <Field as="select" name="typeOfLease" className="form-select">
                            <option value="">Select Type</option>
                            <option value="Wet">Wet</option>
                            <option value="Dry">Dry</option>
                        </Field>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="ratePerHour" className="form-label">Rate Per Hour</label>
                        <Field type="text" name="ratePerHour" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <Field type="text" name="quantity" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="weightCapacity" className="form-label">Weight Capacity</label>
                        <Field type="text" name="weightCapacity" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="liftingHeight" className="form-label">Lifting Height</label>
                        <Field type="text" name="liftingHeight" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="horsepower" className="form-label">Horsepower</label>
                        <Field type="text" name="horsepower" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="boomLength" className="form-label">Boom Length</label>
                        <Field type="text" name="boomLength" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="diggingDepth" className="form-label">Digging Depth</label>
                        <Field type="text" name="diggingDepth" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="bladeSize" className="form-label">Blade Size</label>
                        <Field type="text" name="bladeSize" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="bucketCapacity" className="form-label">Bucket Capacity</label>
                        <Field type="text" name="bucketCapacity" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="tipperCapacity" className="form-label">Tipper Capacity</label>
                        <Field type="text" name="tipperCapacity" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="demolitionSpecs" className="form-label">Demolition Specifications</label>
                        <Field type="text" name="demolitionSpecs" className="form-control" />
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

export default AddBuildersPlant