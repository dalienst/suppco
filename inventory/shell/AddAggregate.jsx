"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createShellEquipment } from "@/services/shell";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function AddAggregate({ branch, company, item, category, refetchShell }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
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
          formData.append("units_of_measurement", values.units_of_measurement);
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
          formData.append("compressive_strength", values.compressive_strength);
          formData.append("moisture_content", values.moisture_content);
          formData.append("contamination_levels", values.contamination_levels);
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

          await createShellEquipment(formData, axios);
          toast?.success("Shell Equipment created successfully. Refreshing...");
          refetchShell();
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
          <div>
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={(event) => {
                setFieldValue("image", event?.target?.files[0]);
              }}
            />
          </div>

          <div>
            <label htmlFor="source_location">Source Location</label>
            <Field type="text" id="source_location" name="source_location" />
          </div>

          {/* other fields */}
        </Form>
      )}
    </Formik>
  );
}

export default AddAggregate;
