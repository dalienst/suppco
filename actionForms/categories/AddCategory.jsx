"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth';
import { createCategory } from '@/services/category';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import FormInput from '../formStructures/FormInput';

function AddCategory({ refetchCategories, handleCloseModal }) {
    const [loading, setLoading] = useState(false)
    const axios = useAxiosAuth();

    return (
        <>
            <Formik
                initialValues={{
                    name: "", inventory: "",
                }}
                onSubmit={async (values) => {
                    setLoading(true);
                    try {
                        await createCategory(values, axios)
                        toast?.success("Category created successfully. Refreshing...")
                        setLoading(false)
                        refetchCategories();
                        handleCloseModal()
                    } catch (error) {
                        if (error?.response?.data?.name) {
                            toast?.error("Category with this name already exists")
                        } else {
                            toast?.error("Failed to create category")
                        }
                    } finally {
                        setLoading(false);
                    }
                }}
            >
                {({ setFieldValue }) => (
                    <Form>
                        <div className="mb-3">
                            <FormInput label="Name" name="name" type="text" placeholder="Enter name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inventory" className="form-label">Inventory</label>
                            <Field as="select" id="inventory" name="inventory" className="form-select">
                                <option value="">Select Inventory</option>
                                <option value="shell">Shell</option>
                                <option value="site">Site</option>
                                <option value="plumbing">Plumbing</option>
                                <option value="electricity">Electricity</option>
                                <option value="builders">Builders Plant</option>
                            </Field>
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
        </>
    )
}

export default AddCategory