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
          source_location:'',
          name:'',
          shape:'',
          size:'',
          density:'',
          compressive_strength:'',
          moisture_content:'',
          size_dimensions:'',
          silt_content:'',
          gradiation:'',
        }}
        onSubmit={async (values, { resetForm }) => {
          setLoading(true);
          try {
            const formData = new FormData();
            formData.append("source_location", values.source_location);
            formData.append("name", values.name);
            formData.append("shape", values.shape);
            formData.append("size", values.size);
            formData.append("density", values.density);
            formData.append(
              "compressive_strength",
              values.compressive_strength
            );
            formData.append("moisture_content", values.moisture_content);
            formData.append("size_dimensions", values.size_dimensions);
            formData.append("silt_content", values.silt_content);
            formData.append("gradiation", values.gradiation);
            await createShellEquipment(formData, axios);
            toast?.success(
              "Shell Equipment created successfully. Refreshing..."
            );
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
                    </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddAggregate;
