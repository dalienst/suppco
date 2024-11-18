"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth';
import React, { useState } from 'react'
import { Form, Formik } from 'formik';
import { createBracket } from '@/services/category';
import FormInput from '../formStructures/FormInput';
import toast from 'react-hot-toast';

function AddBracket({ refetchItem, handleCloseModal, subCategoryItem }) {
    const [loading, setLoading] = useState(false)
    const axios = useAxiosAuth();
    return (
        <Formik
            initialValues={{
                name: "", sublayeritem: subCategoryItem?.name,
            }}
            onSubmit={async (values) => {
                setLoading(true);
                try {
                    await createBracket(values, axios)
                    toast?.success("Bracket created successfully. Refreshing...")
                    setLoading(false)
                    refetchItem();
                    handleCloseModal()
                } catch (error) {
                    if (error?.response?.data?.name) {
                        toast?.error("Bracket with this name already exists")
                    } else {
                        toast?.error("Failed to create bracket")
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

export default AddBracket