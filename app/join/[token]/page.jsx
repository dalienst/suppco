"use client";

import { useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { RegistrationSchema } from '@/validation';
import { signUpEmployee } from '@/tools/api';
import toast from 'react-hot-toast';
import { Label } from '@/app/components/ui/label';
import { Button } from '@/app/components/ui/button';
import { Loader2 } from 'lucide-react';

function EmployeeRegistration({ params: { token } }) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    return (
        <div className="h-screen grid place-content-center">
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
                        <Form className="p-3 rounded-lg max-w-[460px] mx-4 border space-y-3">
                        <div className="mb-3">
                          <h3 className="text-xl font-semibold">Employee</h3>
                          <p className="text-[#6c6c6c]">
                            Create your Employee Account to access the application
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                                      <Label htmlFor="email">Email</Label>
                                      <Field
                                        type="email"
                                        required
                                        name="email"
                                        className="border rounded-lg p-2"
                                      />
                                       <ErrorMessage
                                          name="email"
                                          component="p"
                                          className="text-red-400 text-sm"
                                        />
                                    </div>
                        <div className="flex flex-col gap-1">
                                      <Label htmlFor="password">Password</Label>
                                      <Field
                                        type="password"
                                        required
                                        name="password"
                                        className="border rounded-lg p-2"
                                      />
                                       <ErrorMessage
                                          name="password"
                                          component="p"
                                          className="text-red-400 text-sm"
                                        />
                                    </div>
                        <div className="flex flex-col gap-1">
                                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                                      <Field
                                        type="password"
                                        required
                                        name="confirmPassword"
                                        className="border rounded-lg p-2"
                                      />
                                       <ErrorMessage
                                          name="confirmPassword"
                                          component="p"
                                          className="text-red-400 text-sm"
                                        />
                                    </div>
          
                        <Button
                          type="submit"
                          className="btn w-100 contractor-btn"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <Loader2 className="animate-spin" />
                          ) : (
                            "Create"
                          )}
                        </Button>
                      </Form>
                )}
            </Formik>
        </div>
    )
}

export default EmployeeRegistration