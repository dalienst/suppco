"use client";
import { Button } from "@/app/components/ui/button";
import FormGenerator from "@/components/formGenerator/FormGenerator";
import { aggregateInputFields } from "@/data/formGeneratorInputTypes";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createShellEquipment } from "@/services/shell";
import { Field, Form, Formik } from "formik";
import { ChevronLeft, ChevronRight, ImagePlus, Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import SupplierInputForm from "./SupplierInputForm";
import { Label } from "@/app/components/ui/label";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

function AddAggregate({ branch, item, category, refetchShell, employees }) {
  const [loading, setLoading] = useState(false);
  const [supplierInputValues, setSupplierInputValues] = useState(null);
  const [page, setPage] = useState(1);
  const router = useRouter();
  const { slug } = useParams();

  const handleSupplierInputValues = (data) => {
    setSupplierInputValues(data);
  };
  const axios = useAxiosAuth();

  return (
    <div className="">
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
          manufacturer: "",
          identification_number: "",
          features: "", // textfield
          condition: "", // textfield
          date_of_manufacture: "",
          minimum_order_quantity: "",
          texture: "", // select field: fine, coarse
          dimensions: "", // select field: inch, mm, cm, m
          shape: "",
          density: "",
          compressive_strength: "",
          moisture_content: "",
          contamination_levels: "",
          silt_content: "",
          gradiation: "",
          standards_certifications: "",
          environmental_specifications: "",
          other: "",
          employees: employees || [],
          delivery_mode: "",
        }}
        onSubmit={async (values, { resetForm }) => {
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
            formData.append("manufacturer", values.manufacturer);
            formData.append(
              "identification_number",
              values.identification_number
            );
            formData.append("features", values.features);
            formData.append("condition", values.condition);
            formData.append("date_of_manufacture", values.date_of_manufacture);
            formData.append(
              "minimum_order_quantity",
              values.minimum_order_quantity
            );
            formData.append("texture", values.texture);
            formData.append("dimensions", values.dimensions);
            formData.append("shape", values.shape);
            formData.append("density", values.density);
            formData.append(
              "compressive_strength",
              values.compressive_strength
            );
            formData.append("moisture_content", values.moisture_content);
            formData.append(
              "contamination_levels",
              values.contamination_levels
            );
            formData.append("silt_content", values.silt_content);
            formData.append("gradiation", values.gradiation);
            formData.append(
              "standards_certifications",
              values.standards_certifications
            );
            formData.append(
              "environmental_specifications",
              values.environmental_specifications
            );
            formData.append("other", values.other);
            formData.append(
              "offers_delivery",
              supplierInputValues?.offers_delivery
            );
            formData.append(
              "delivery_charges",
              supplierInputValues?.delivery_charges
            );
            formData.append(
              "quantity_available",
              supplierInputValues?.quantity_available
            );
            formData.append(
              "rate_per_unit",
              supplierInputValues?.rate_per_unit
            );

            formData.append(
              "deposit_percentage",
              supplierInputValues?.deposit_percentage
            );
            if (
              Array.isArray(values.employees) &&
              values.employees.length > 0
            ) {
              values.employees.forEach((employee) =>
                formData.append("employees", employee)
              );
            }
            formData.append("delivery_mode", values.delivery_mode);
            formData.append("fixed_terms", supplierInputValues?.fixed_terms);
            formData.append(
              "fixed_fifty_terms",
              supplierInputValues?.fixed_fifty_terms
            );
            formData.append("pod_terms", supplierInputValues?.pod_terms);
            formData.append(
              "negotiable_terms",
              supplierInputValues?.negotiable_terms
            );
            formData.append("is_fixed", supplierInputValues?.is_fixed);
            formData.append(
              "is_fixed_fifty",
              supplierInputValues?.is_fixed_fifty
            );
            formData.append(
              "is_payment_on_delivery",
              supplierInputValues?.is_payment_on_delivery
            );
            formData.append(
              "is_negotiable",
              supplierInputValues?.is_negotiable
            );
            await createShellEquipment(formData, axios);
            toast?.success(
              "Shell Equipment created successfully. Refreshing..."
            );
            // refetchShell();
            router.push(`/branch/${slug}`);
            setLoading(false);
            resetForm();
          } catch (error) {
            console.log(error);
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
                  {aggregateInputFields.map((field) => (
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
                <div className="flex flex-col gap-1 mb-2 border p-4 rounded-lg">
                  <span className="text-lg font-semibold block mb-4">
                    Employee Allocation
                  </span>
                  <Label htmlFor="employee">Employee</Label>
                  <Field
                    as="select"
                    id="employee"
                    name="employees"
                    multiple
                    className="bg-white border-[1px] p-2 rounded-lg"
                    onChange={(e) => {
                      const selectedOptions = Array.from(
                        e.target.selectedOptions,
                        (option) => option.value
                      );
                      setFieldValue("employees", selectedOptions);
                    }}
                  >
                    <option value="">N/A</option>
                    {employees?.length &&
                      employees.map((employee, index) => (
                        <option key={index} value={employee} id={employee}>
                          {employee}
                        </option>
                      ))}
                  </Field>
                </div>
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
                  <Button
                    variant="outline"
                    disabled={loading}
                    onClick={() => setPage(2)}
                  >
                    <ChevronLeft /> Back
                  </Button>
                  <p>Page {page} of 3</p>
                </div>
              </div>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddAggregate;
