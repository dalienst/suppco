"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { createSubCategory } from '@/services/category';
import FormInput from '@/actionForms/formStructures/FormInput';

function AddSubCategories({ refetchCategory, handleCloseModal, category }) {
    const [loading, setLoading] = useState(false)
    const axios = useAxiosAuth();
    return (
        <Formik
            initialValues={{
                name: "", category: category?.name,
            }}
            onSubmit={async (values) => {
                setLoading(true);
                try {
                    await createSubCategory(values, axios)
                    toast?.success("Sub Category created successfully. Refreshing...")
                    setLoading(false)
                    refetchCategory();
                    handleCloseModal()
                } catch (error) {
                    if (error?.response?.data?.name) {
                        toast?.error("Sub Category with this name already exists")
                    } else {
                        toast?.error("Failed to create sub category")
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

                    <button
                        type="submit"
                        className="btn supplier-btn mt-3"
                        disabled={loading}
                    >
                        {loading ? (
                            <div
                                className="spinner-border spinner-border-sm text-primary"
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

export default AddSubCategories