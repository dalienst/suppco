"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth';
import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import FormInput from '../formStructures/FormInput';
import { createSubCategoryItem } from '@/services/category';


function AddSubCategoryItem({ refetchSubCategory, handleCloseModal, subCategory }) {
    const [loading, setLoading] = useState(false)
    const axios = useAxiosAuth();
    return (
        <Formik
            initialValues={{
                name: "", sublayer: subCategory?.name,
            }}
            onSubmit={async (values) => {
                setLoading(true);
                try {
                    await createSubCategoryItem(values, axios)
                    toast?.success("Item created successfully. Refreshing...")
                    setLoading(false)
                    refetchSubCategory();
                    handleCloseModal()
                } catch (error) {
                    if (error?.response?.data?.name) {
                        toast?.error("Item with this name already exists")
                    } else {
                        toast?.error("Failed to create item")
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
                                className="spinner-border spinner-border-sm text-supplier"
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

export default AddSubCategoryItem