"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createShellEquipment } from "@/services/shell";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function AddMetalWork({ branch, company, item, category, refetchShell }) {
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
          grade: "",
          finish: "",
          standards_certifications: "",
          environmental_specifications: "",
          other: "", // textfield
        }}
        onSubmit={async (values) => {
          setLoading(true);
          try {
            const formData = new FormData();
            formData.append("branch", values.branch);
            formData.append("company", values.company);
            formData.append("sublayeritem", values.sublayeritem);
            formData.append("layer", values.layer);
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
            formData.append("dimensions", values.dimensions);
            formData.append("diameter", values.diameter);
            formData.append("width", values.width);
            formData.append("length", values.length);
            formData.append("height", values.height);
            formData.append("thickness", values.thickness);
            formData.append("grade", values.grade);
            formData.append("finish", values.finish);
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
            setLoading(false);
            refetchShell();
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

export default AddMetalWork;
