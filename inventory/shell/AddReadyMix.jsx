"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createShellEquipment } from "@/services/shell";
import { Form, Formik } from "formik";
import { ChevronLeft, ChevronRight, ImagePlus, Loader2, ThumbsUp } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import SupplierInputForm from "./SupplierInputForm";
import FormGenerator from "@/components/formGenerator/FormGenerator";
import { Button } from "@/app/components/ui/button";
import { readyMixInputFields } from "@/data/formGeneratorInputTypes";
import Image from "next/image";

function AddReadyMix({ branch, item, category, refetchShell }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [supplierInputValues, setSupplierInputValues] = useState(null);
  const axios = useAxiosAuth();

  const handleSupplierInputValues = (data) => {
    setSupplierInputValues(data);
  };

  return (
      <Formik
        initialValues={{
          branch: branch?.reference,
          company: branch?.company,
          sublayeritem: item?.name,
          layer: category?.name,
          image: null,
          source_location: "",
          product_name: "",
          description: "",
          units_of_measurement: "",
          minimum_order_quantity: "",
          dimensions: "", // select field: inch, mm, cm, m
          texture: "", // select field: fine, coarse
          slump_value: "",
          cement_type: "",
          admixture: "",
          mix_proportions: "",
          standards_certifications: "",
          environmental_specifications: "",
          other: "", // textfield
        }}
        onSubmit={async (values) => {
          setLoading(true);
          try {
            const formData = new FormData();
            formData?.append("branch", branch?.reference);
            formData?.append("company", branch?.company);
            formData?.append("sublayeritem", item?.name);
            formData?.append("layer", category?.name);
            if (values.image) {
              formData.append("image", values.image);
            }
            formData.append("source_location", values.source_location);
            formData.append("product_name", values.product_name);
            formData.append("description", values.description);
            formData.append(
              "units_of_measurement",
              values.units_of_measurement
            );

            formData.append(
              "minimum_order_quantity",
              values.minimum_order_quantity
            );
            formData.append("dimensions", values.dimensions);
            formData.append("texture", values.texture);
            formData.append("slump_value", values.slump_value);
            formData.append("cement_type", values.cement_type);
            formData.append("admixture", values.admixture);
            formData.append("mix_proportions", values.mix_proportions);
            formData.append(
              "standards_certifications",
              values.standards_certifications
            );
            formData.append(
              "environmental_specifications",
              values.environmental_specifications
            );
            formData.append("other", values.other);

            await createShellEquipment(formData, axios);
            toast?.success(
              "Shell Equipment created successfully."
            );
            // refetchShell();
            router.push(`/branch/${slug}`);
            setLoading(false);
          } catch (error) {
            toast?.error("Failed to create shell equipment");
          } finally {
            setLoading(false);
          }
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            {page === 1 ? (
              <div>
                <div className="flex items-center gap-2 mt-3 mb-5">
                  <label htmlFor="image" className="flex gap-2">
                    <ImagePlus size={30} />
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={(event) => {
                      setFieldValue("image", event?.target?.files[0]);
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 lg:gap-5">
                  {readyMixInputFields.map((field) => (
                    <FormGenerator
                      key={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      label={field.placeholder}
                      inputType={field.inputType}
                      {...(field.options && { options: field.options })}
                      type="text"
                    />
                  ))}
                </div>
                <div className="mt-5 mb-5 flex justify-between gap-2">
                  <Button onClick={() => setPage(2)}>
                    Next page <ChevronRight />
                  </Button>
                  <p>Page {page} of 3</p>
                </div>
              </div>
            ) : page === 2 ? (
              <div className="">
                <p className="font-semibold text-lg lg:text-xl mb-4">
                  Supplier Input Form
                </p>
                <SupplierInputForm
                  onSupplierInputValues={handleSupplierInputValues}
                />
                <div className="mt-5 mb-5 flex justify-between gap-2">
                  <div className="flex justify-between gap-2 ">
                    <Button onClick={() => setPage(1)}>
                      <ChevronLeft /> Back
                    </Button>
                    <Button
                      disabled={supplierInputValues === null}
                      onClick={() => setPage(3)}
                    >
                      Next <ChevronRight />
                    </Button>
                  </div>
                  <p>Page {page} of 3</p>
                </div>
              </div>
            ) : page === 3 ? (
              <div>
                <div className="grid h-[70vh] place-content-center">
                                  <Image
                                    src="/thumbs.webp"
                                    alt="thumbs up"
                                    width={150}
                                    height={150}
                                    className="mx-auto"
                                  />
                                  <span className="font-semibold text-2xl text-center">
                                    You&apos;re done.
                                  </span>
                                  <p>Click submit to save this information.</p>
                                  {supplierInputValues && (
                                    <Button
                                      disabled={loading}
                                      type="submit"
                                      className="mt-10 mb-5"
                                    >
                                      {loading ? (
                                        <Loader2 className="animate-spin" />
                                      ) : (
                                        "Submit"
                                      )}
                                    </Button>
                                  )}
                                </div>
                <div className="flex justify-between gap-2 ">
                  <Button disabled={loading} onClick={() => setPage(2)}>
                    <ChevronLeft /> Back
                  </Button>
                  <p>Page {page} of 3</p>
                </div>
              </div>
            ) : null}
          </Form>
        )}
      </Formik>
  );
}

export default AddReadyMix;
