"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { signUpContractor, signUpSupplier } from "@/tools/api";
import { RegistrationSchema } from "@/validation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Register({role}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
      <div className="">
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={RegistrationSchema}
          onSubmit={async (values) => {
            setIsLoading(true);
            try {
                if (role === 'contractor') {
                    await signUpContractor(values);
                  } else {
                    await signUpSupplier(values);
                }
              toast?.success("Account created successfully");
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
            <div className="w-[300px] md:w-[460px] border py-10 px-5 md:p-10 rounded-lg">
                  <h3 className="text-3xl font-semibold text-center">Sign up</h3>
                  <p className="text-center capitalize font-semibold">
                    {`Create your ${role} Account`}
                  </p>
              <Form className="mt-5">
                <div className="flex flex-col gap-3 mb-3">
                  <Label htmlFor="email" className="">
                    Email
                  </Label>
                  <Field
                    type="email"
                    className="border py-1 px-4 rounded-md"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col gap-3 mb-3">
                  <Label htmlFor="password" className="">
                    Password
                  </Label>
                  <Field
                    type="password"
                    className="border py-1 px-4 rounded-md"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col gap-3 mb-3">
                  <Label
                    htmlFor="confirmPassword"
                    className=""
                  >
                    Confirm Password
                  </Label>
                  <Field
                    type="password"
                    className="border py-1 px-4 rounded-md"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="p"
                    className="text-red-500"
                  />
                </div>
                <Button
                  type="submit"
                   className="bg-blue900 hover:bg-blue700 w-full rounded-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                      <span className="visually-hidden">Loading...</span>
                  ) : (
                    "Sign Up"
                  )}
                </Button>

                <p className="mt-3">
                  Already have an account?{" "}
                  <Link
                    href="/auth/login"
                    className="text-blue800"
                  >
                    Login
                  </Link>
                </p>
              </Form>
            </div>
          )}
        </Formik>
      </div>
  );
}

export default Register;