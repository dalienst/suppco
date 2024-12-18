"use client";
import React, { useState } from "react";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import useUserId from "@/hooks/useUserId";
import useFetchProfile from "@/dataActions/accounts/FetchProfile";
import { updateUser } from "@/services/accounts";
import Image from "next/image";
import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import Link from "next/link";
import UpdateCompany from "@/actionForms/company/UpdateCompany";
import { useRouter } from "next/navigation";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { CircleUser, CircleUserRound, Loader2 } from "lucide-react";
import useFetchCompany from "@/dataActions/company/FetchCompany";

const links = [
  { id: 1, href: "#personal", label: "Personal Info" },
  { id: 2, href: "#public-profile", label: "Company Info" },
  { id: 3, href: "#financials", label: "Financial settings" },
  { id: 4, href: "#government", label: "Government Info" },
  { id: 5, href: "#tax", label: "Tax Info" },
];

function ContractorSettings() {
  const axios = useAxiosAuth();
  const userId = useUserId();
  const [loading, setLoading] = useState(false);
  const [settingId, setSettingId] = useState(1);
  const router = useRouter();

  const {
    isLoading: isLoadingUser,
    data: profile,
    refetch: refetchProfile,
  } = useFetchProfile();
  console.log("settings profile", profile);

  const companySlug = profile?.companies?.slug;

  const {
    isLoading: isLoadingCompany,
    data: company,
    refetch: refetchCompany,
  } = useFetchCompany(companySlug);

  console.log("company details", company);

  const handleDelete = async (companySlug) => {
    setLoading(true);
    try {
      await deleteCompany(companySlug, axios);
      toast.success("Company deleted successfully. Redirecting...");
      router.push("/supplier/dashboard");
    } catch (error) {
      toast.error("Failed to delete company");
    } finally {
      setLoading(false);
    }
  };

  if (isLoadingUser) {
    return (
      <section className="grid place-content-center">
        <Loader2 className="animate-spin" />
      </section>
    );
  }

  return (
    <div className="mx-4 mt-4 overflow-hidden p-2 lg:p-6 rounded-t-lg">
      <h1 className="text-2xl mb-5">Account Settings</h1>
      <div className="flex flex-col h-[calc(100vh-135px)] md:flex-row">
        <ul className="flex flex-col md:flex-wrap rounded-lg p-2 px-2 md:px-8 md:pl-2 md:pt-4 w-full md:w-fit mb-2 md:mb-0  md:items-start md:flex-col md:border-r md:rounded-none md:rounded-l-xl gap-2 lg:gap-5">
          {links.map((link) => (
            <li
              key={link.id}
              onClick={() => setSettingId(link.id)}
              className={`${
                settingId === link.id ? "text-blue800 bg-blue-50" : ""
              } cursor-pointer w-fit sm:w-auto p-1 md:py-2 px-4 rounded-full`}
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="overflow-auto scroll-smooth flex-grow rounded-lg md:rounded-l-none p-2 md:p-6">
          <section id="personal" className="scroll-mt-3">
            <h2 className="text-xl font-semibold">Personal Info</h2>
            <div className="mt-3">
              <Formik
                initialValues={{
                  avatar: null,
                  first_name: profile?.first_name,
                  last_name: profile?.last_name,
                  identification: profile?.identification,
                  kra_pin: profile?.kra_pin,
                  phone: profile?.phone,
                  location: profile?.location,
                }}
                onSubmit={async (values) => {
                  setLoading(true);
                  try {
                    const formData = new FormData();
                    if (values?.avatar) {
                      formData.append("avatar", values?.avatar);
                    }
                    formData.append("first_name", values?.first_name);
                    formData.append("last_name", values?.last_name);
                    formData.append("identification", values?.identification);
                    formData.append("kra_pin", values?.kra_pin);
                    formData.append("phone", values?.phone);
                    formData.append("location", values?.location);

                    await updateUser(userId, formData, axios);
                    toast?.success(
                      "Profile updated successfully. Refreshing..."
                    );
                    refetchProfile();
                    setLoading(false);
                  } catch (error) {
                    toast?.error("Failed to update profile");
                  } finally {
                    setLoading(false);
                  }
                }}
              >
                {({ setFieldValue }) => (
                  <Form>
                    {/* TODO: work on images */}
                    <div className="border rounded-xl px-4 py-6">
                      <div>
                        {profile?.avatar ? (
                          <Image
                            src={profile?.avatar}
                            alt="logo"
                            width={60}
                            height={60}
                            className="rounded-full h-[60px] w-[60px] object-cover"
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
                          className=""
                          onChange={(event) => {
                            setFieldValue(
                              "avatar",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-4 border py-6 px-4 rounded-xl">
                      <h2 className="font-semibold">Personal Information</h2>
                      <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1">
                          <Label htmlFor="first_name">First Name</Label>
                          <Field
                            type="text"
                            className="border p-2 rounded-md"
                            id="first_name"
                            name="first_name"
                            placeholder={profile?.first_name || "First Name"}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <Label htmlFor="last_name">Last Name</Label>
                          <Field
                            type="text"
                            className="border p-2 rounded-md"
                            id="last_name"
                            name="last_name"
                            placeholder={profile?.last_name || "Last Name"}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <Label htmlFor="phone">Phone</Label>
                          <Field
                            type="number"
                            className="border p-2 rounded-md"
                            id="phone"
                            name="phone"
                            placeholder={
                              profile?.phone || "Phone: +254712345678"
                            }
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <Label htmlFor="identification">
                            Identification/Passport
                          </Label>
                          <Field
                            type="number"
                            className="border p-2 rounded-md"
                            id="identification"
                            name="identification"
                            placeholder={
                              profile?.identification || "Identification"
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 border py-6 px-4 rounded-xl">
                      <h2 className="font-semibold">Personal Information</h2>
                      <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1">
                          <Label htmlFor="kra_pin">KRA PIN</Label>
                          <Field
                            type="text"
                            className="border p-2 rounded-md"
                            id="kra_pin"
                            name="kra_pin"
                            placeholder={profile?.kra_pin || "KRA PIN"}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <Label htmlFor="location">Location</Label>
                          <Field
                            type="text"
                            className="border p-2 rounded-md"
                            id="location"
                            name="location"
                            placeholder={profile?.location || "Location"}
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="mt-4 bg-blue900 hover:bg-blue700"
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        "Update"
                      )}
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </section>
          <section className="mt-8">
            <UpdateCompany
              company={profile?.companies?.slug}
              refetchCompany={refetchCompany}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default ContractorSettings;
