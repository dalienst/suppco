"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createShellEquipment } from "@/services/shell";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function AddWalls({ branch, company, item, category, refetchShell }) {
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
          texture: "", // select field: fine, coarse
          dimensions: "", // select field: inch, mm, cm, m
          diameter: "",
          width: "",
          length: "",
          height: "",
          thickness: "",
          color: "",
          finish: "",
          compressive_strength: "",
          r_value: "",
          moisture_absorption: "",
          mortar_type: "",
          packaging: "",
          edge_type: "",
          fire_rating: "",
          moisture_resistance: "",
          sound_proofing: "",
          density: "",
          veneer_species: "",
          core_material: "",
          glue_bonding: "",
          sustainability: "",
          wood_species: "",
          fe_emission: "",
          glass_coating: "",
          transparency: "",
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
            formData.append("diameter", values.diameter);
            formData.append("width", values.width);
            formData.append("length", values.length);
            formData.append("height", values.height);
            formData.append("thickness", values.thickness);
            formData.append("color", values.color);
            formData.append("finish", values.finish);
            formData.append(
              "compressive_strength",
              values.compressive_strength
            );
            formData.append("r_value", values.r_value);
            formData.append("moisture_absorption", values.moisture_absorption);
            formData.append("mortar_type", values.mortar_type);
            formData.append("packaging", values.packaging);
            formData.append("edge_type", values.edge_type);
            formData.append("fire_rating", values.fire_rating);
            formData.append("moisture_resistance", values.moisture_resistance);
            formData.append("sound_proofing", values.sound_proofing);
            formData.append("density", values.density);
            formData.append("veneer_species", values.veneer_species);
            formData.append("core_material", values.core_material);
            formData.append("glue_bonding", values.glue_bonding);
            formData.append("sustainability", values.sustainability);
            formData.append("wood_species", values.wood_species);
            formData.append("fe_emission", values.fe_emission);
            formData.append("glass_coating", values.glass_coating);
            formData.append("transparency", values.transparency);
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

export default AddWalls;
