"use client";
import { Button } from "@/app/components/ui/button";
import FormGenerator from "@/components/formGenerator/FormGenerator";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createShellEquipment } from "@/services/shell";
import { Form, Formik } from "formik";
import { ChevronLeft, ChevronRight, ImagePlus, Loader2, ThumbsUp } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import SupplierInputForm from "./SupplierInputForm";
import { formWorkInputFields } from "@/data/formGeneratorInputTypes";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

function AddFormwork({ branch, item, category, refetchShell }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [supplierInputValues, setSupplierInputValues] = useState(null);
  const axios = useAxiosAuth();
  const router = useRouter();
  const { slug } = useParams();

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
          manufacturer: "",
          identification_number: "",
          features: "", // textfield
          condition: "", // textfield
          date_of_manufacture: "",
          minimum_order_quantity: "",
          dimensions: "", // select field: inch, mm, cm, m
          diameter: "",
          width: "",
          length: "",
          height: "",
          thickness: "",
          material: "",
          grade: "",
          finish: "",
          formwork_compatibility: "",
          panel_strength: "",
          panel_thickness: "",
          panel_surface_treatment: "",
          panel_connection: "",
          re_use_number: "",
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
            formData?.append("source_location", values?.source_location);
            formData?.append("product_name", values?.product_name);
            formData?.append("description", values?.description);
            formData?.append("manufacturer", values?.manufacturer);
            formData?.append(
              "identification_number",
              values?.identification_number
            );
            formData?.append("features", values?.features);
            formData?.append("condition", values?.condition);
            formData?.append(
              "date_of_manufacture",
              values?.date_of_manufacture
            );
            formData?.append(
              "minimum_order_quantity",
              values?.minimum_order_quantity
            );
            formData?.append("dimensions", values?.dimensions);
            formData?.append("diameter", values?.diameter);
            formData?.append("width", values?.width);
            formData?.append("length", values?.length);
            formData?.append("height", values?.height);
            formData?.append("thickness", values?.thickness);
            formData?.append("material", values?.material);
            formData?.append("grade", values?.grade);
            formData?.append("finish", values?.finish);
            formData?.append(
              "formwork_compatibility",
              values?.formwork_compatibility
            );
            formData?.append("panel_strength", values?.panel_strength);
            formData?.append("panel_thickness", values?.panel_thickness);
            formData?.append(
              "panel_surface_treatment",
              values?.panel_surface_treatment
            );
            formData?.append("panel_connection", values?.panel_connection);
            formData?.append("re_use_number", values?.re_use_number);
            formData?.append(
              "standards_certifications",
              values?.standards_certifications
            );
            formData?.append(
              "environmental_specifications",
              values?.environmental_specifications
            );
            formData?.append("other", values?.other);

            await createShellEquipment(formData, axios);
            toast?.success(
              "Shell Equipment created successfully."
            );
            // refetchShell();
            router.push(`/branch/${slug}`);
            setLoading(false);
          } catch (error) {
            toast?.error("Failed to create shell equipment. Please try again later.");
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
                  {formWorkInputFields.map((field) => (
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
                <div className="grid place-content-center">
                  <p className="">You&apos;re done. <ThumbsUp/></p>
                  <p>Click submit to save this information.</p>
                {supplierInputValues && (
                  <Button
                  disabled={loading}
                  type="submit"
                  className="mt-10 mb-5"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : "Submit"}
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

export default AddFormwork;
