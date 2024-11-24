"use client";

import useAxiosAuth from "@/hooks/useAxiosAuth";
import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import Image from "next/image";
import FormInput from "@/actionForms/formStructures/FormInput";
import { updateCompany } from "@/services/companies";
import { CircleUser } from "lucide-react";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";

function UpdateCompany({ company, refetchCompany }) {
  const axios = useAxiosAuth();
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        logo: null,
        name: company?.name || "",
        email: company?.email || "",
        phone: company?.phone || "",
        address: company?.address || "",
        currency: company?.currency || "",
        fiscal_year: company?.fiscal_year || "",
        kra_pin: company?.kra_pin || "",
        registration_number: company?.registration_number || "",
        vat_number: company?.vat_number || "",
        vat_compliance: company?.vat_compliance || false, // Ensure this is set correctly
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const formData = new FormData();
          if (values?.logo) {
            formData.append("logo", values?.logo);
          }
          formData?.append("name", values?.name);
          formData?.append("email", values?.email);
          formData?.append("phone", values?.phone);
          formData?.append("address", values?.address);
          formData?.append("currency", values?.currency);
          formData?.append("fiscal_year", values?.fiscal_year);
          formData?.append("kra_pin", values?.kra_pin);
          formData?.append("registration_number", values?.registration_number);
          formData?.append("vat_number", values?.vat_number);
          formData?.append("vat_compliance", values?.vat_compliance);
          await updateCompany(formData, axios, company?.slug);
          toast.success("Company updated successfully. Refreshing...");
          refetchCompany();
        } catch (error) {
          if (error?.response?.data?.email) {
            toast.error("Company with this email already exists");
          } else if (error?.response?.data?.phone) {
            toast.error("Company with this phone number already exists");
          } else if (error?.response?.data?.name) {
            toast.error("Company with this name already exists");
          } else {
            toast.error("Failed to create company");
          }
          refetchCompany();
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <section id="public-profile" className="scroll-mt-3">
            <h2 className="text-xl font-semibold">Company Information</h2>
            <div className="border mt-3 rounded-xl px-4 py-6">
              <div>
                {company?.logo ? (
                  <Image
                    src={company?.logo}
                    alt="logo"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                ) : (
                  <CircleUser
                    strokeWidth={1}
                    className="size-[50px] text-[#b0b0b0]"
                  />
                )}
              </div>
              <div>
                <input
                  type="file"
                  className="form-control form-control-sm"
                  onChange={(event) => {
                    setFieldValue("logo", event.currentTarget.files[0]);
                  }}
                />
              </div>
            </div>
            <div className="mt-4 border py-6 px-4 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-5">
              <FormInput
                label="Company Name"
                name="name"
                type="text"
                placeholder={company?.name || "Enter company name"}
              />
              <FormInput
                label="Company Email"
                name="email"
                type="email"
                placeholder={company?.email || "Enter company email"}
              />
              <FormInput
                label="Company Phone"
                name="phone"
                type="text"
                placeholder={company?.phone || "Enter company phone"}
              />
              <FormInput
                label="Company Address"
                name="address"
                type="text"
                placeholder={company?.address || "Enter company address"}
              />
            </div>
          </section>
          <section id="financials" className="mt-8 scroll-mt-3">
            <h2 className="text-xl font-semibold">Financial settings</h2>
            <div className="mt-3 border py-6 px-4 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1">
                <Label htmlFor="currency">Currency</Label>
                <Field
                  as="select"
                  name="currency"
                  className="border p-2 rounded-md bg-white"
                >
                  <option value={company?.currency || "Select Currency"}>
                    {company?.currency}
                  </option>
                  <option value="KES">KES - Kenyan Shilling</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="JPY">JPY - Japanese Yen</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="AUD">AUD - Australian Dollar</option>
                  <option value="INR">INR - Indian Rupee</option>
                  <option value="CNY">CNY - Chinese Yuan</option>
                  <option value="ZAR">ZAR - South African Rand</option>
                  <option value="NGN">NGN - Nigerian Naira</option>
                  <option value="BRL">BRL - Brazilian Real</option>
                  <option value="MXN">MXN - Mexican Peso</option>
                  <option value="CHF">CHF - Swiss Franc</option>
                </Field>
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="fiscal_year">Fiscal Year</Label>
                <Field
                  className="border p-2 rounded-md bg-white"
                  as="select"
                  name="fiscal_year"
                >
                  <option value={company?.fiscal_year}>
                    {company?.fiscal_year || "Select Fiscal Year"}
                  </option>
                  {/* List of fiscal year options */}
                  <option value="January-December">January to December</option>
                  <option value="February-January">February to January</option>
                  <option value="March-February">March to February</option>
                  <option value="April-March">April to March</option>
                  <option value="May-April">May to April</option>
                  <option value="June-May">June to May</option>
                  <option value="July-June">July to June</option>
                  <option value="August-July">August to July</option>
                  <option value="September-August">September to August</option>
                  <option value="October-September">
                    October to September
                  </option>
                  <option value="November-October">November to October</option>
                  <option value="December-November">
                    December to November
                  </option>
                </Field>
              </div>
            </div>
          </section>
          <section id="government" className="mt-8">
            <h2 className="text-xl font-semibold">Government</h2>
            <div className="mt-3 border py-6 px-4 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-5">
              <FormInput
                label="Registration Number"
                name="registration_number"
                type="text"
                placeholder={
                  company?.registration_number || "Enter Reg. Number"
                }
              />
              <FormInput
                label="Tax Pin (KRA Pin)"
                name="kra_pin"
                type="text"
                placeholder={company?.kra_pin || "Enter Tax Pin"}
              />
            </div>
          </section>
          <section id="tax" className="mt-8">
            <h2 className="text-xl font-semibold">Tax Area</h2>
            <div className="mt-3 border py-6 px-4 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="flex gap-2 items-center">
                <Field
                  type="checkbox"
                  role="switch"
                  id="vat-compliance"
                  name="vat_compliance"
                  className="form-check-input"
                  checked={values.vat_compliance}
                  onChange={() =>
                    setFieldValue("vat_compliance", !values.vat_compliance)
                  }
                />
                <Label htmlFor="vat-compliance">VAT Compliance</Label>
              </div>
              <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
                <Label htmlFor="vat_number">VAT Number</Label>
                <Field
                  type="text"
                  className="border p-2 rounded-md"
                  id="vat_number"
                  name="vat_number"
                  placeholder={company?.vat_number || "Enter VAT Number"}
                />
              </div>
            </div>
          </section>
          <Button
            type="submit"
            className="mt-4 bg-blue900 hover:bg-blue700"
            disabled={loading}
          >
            {loading ? (
              <span className="visually-hidden">Loading...</span>
            ) : (
              "Update"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default UpdateCompany;
