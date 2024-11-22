"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createShellEquipment } from "@/services/shell";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function AddReadyMix({ branch, company, item, category, refetchShell }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
    <>
      <Formik
        initialValues={{
          branch: branch?.reference,
          company: company?.slug,
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
            formData?.append("branch", values?.branch);
            formData?.append("company", values?.company);
            formData?.append("sublayeritem", values?.sublayeritem);
            formData?.append("layer", values?.layer);
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
              "Shell Equipment created successfully. Refreshing..."
            );
            refetchShell();
            setLoading(false);
          } catch (error) {
            toast?.error("Failed to create shell equipment");
          } finally {
            setLoading(false);
          }
        }}
      ></Formik>
    </>
  );
}

export default AddReadyMix;
