"use client";
import useAxiosAuth from '@/hooks/useAxiosAuth'
import React, { useState } from 'react'
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { updateEmployee } from '@/services/employees';

function UpdateEmployee({ employee, refetchEmployee }) {
    const axios = useAxiosAuth();
    const [loading, setLoading] = useState(false);
    return (
        <Formik enableReinitialize
            initialValues={{
                is_admin: employee?.is_admin || false,
            }}
            onSubmit={async (values) => {
                setLoading(true);
                try {
                    const formData = new FormData();
                    formData.append("is_admin", values.is_admin);

                    await updateEmployee(formData, employee?.slug, axios);
                    toast.success("Employee updated successfully. Refreshing...");
                    setLoading(false);
                    refetchEmployee();
                } catch (error) {
                    toast?.error("Failed to update employee");
                } finally {
                    setLoading(false);
                }
            }}
        >
            {({ setFieldValue, values }) => (
                <Form>
                    <div className="mb-3 form-check form-switch">
                        <Field
                            type="checkbox"
                            role="switch"
                            id="is_admin"
                            name="is_admin"
                            className="form-check-input"
                            checked={values.is_admin} onChange={() =>
                                setFieldValue("is_admin", !values.is_admin)
                            }
                        />
                        <label htmlFor="is_admin" className="form-label">Admin Status</label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-sm btn-outline-success mt-3"
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

export default UpdateEmployee