"use client";

import { useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { RegistrationSchema } from '@/validation';
import { signUpEmployee } from '@/tools/api';
import toast from 'react-hot-toast';

function EmployeeRegistration({ params: { token } }) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    return (
        <div className="container-fluid mx-auto auth-page supplier-signup">
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                    token: token,
                }}
                validationSchema={RegistrationSchema}
                onSubmit={async (values) => {
                    setIsLoading(true);
                    try {
                        await signUpEmployee(values);
                        toast?.success("Account created successfully. Redirecting...");
                        router?.push("/auth/signup/verification");
                    } catch (error) {
                        if (
                            error?.response?.data?.email[0] ||
                            error?.response?.data?.username[0]
                        ) {
                            toast.error("User already exists");
                        } else {
                            toast.error("Registration Failed");
                        }
                    } finally {
                        setIsLoading(false);
                    }
                }}
            >
                {({ touched }) => (
                        <Form className="p-3 shadow rounded bg-white">
                            <div className="mb-3">
                                <h3 className="text-start mb-0">Employee</h3>
                                <p className="lead text-start fs-6">
                                    Create your Employee Account to access the application
                                </p>
                            </div>
                            <hr className="mt-0 mb-3" />

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-semibold">
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    className="form-control "
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="p"
                                    className="text-danger"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label fw-semibold">
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    className="form-control "
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="p"
                                    className="text-danger"
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="confirmPassword"
                                    className="form-label fw-semibold"
                                >
                                    Confirm Password
                                </label>
                                <Field
                                    type="password"
                                    className="form-control "
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                />
                                <ErrorMessage
                                    name="confirmPassword"
                                    component="p"
                                    className="text-danger"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn w-100 supplier-btn"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="spinner-border text-success" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                ) : (
                                    "Sign Up"
                                )}
                            </button>
                        </Form>
                )}
            </Formik>
        </div>
    )
}

export default EmployeeRegistration