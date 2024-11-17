"use client";
import FormInput from '@/actionForms/formStructures/FormInput';
import useAxiosAuth from '@/hooks/useAxiosAuth';
import { createCategory } from '@/services/category';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import toast from 'react-hot-toast';


function AddCategories({ refetchCategories, handleCloseModal, inventory }) {
    const [loading, setLoading] = useState(false)
    const axios = useAxiosAuth();

    return (
            <Formik
                initialValues={{
                    name: "", inventory: inventory,
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

export default AddCategories