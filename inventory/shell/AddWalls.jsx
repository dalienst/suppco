"use client";

import { Button } from "@/app/components/ui/button";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createShellEquipment } from "@/services/shell";
import { Form, Formik } from "formik";
import { ChevronLeft, ChevronRight, ImagePlus, Loader2, ThumbsUp } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import SupplierInputForm from "./SupplierInputForm";
import FormGenerator from "@/components/formGenerator/FormGenerator";
import { wallsInputFields } from "@/data/formGeneratorInputTypes";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

function AddWalls({ branch, item, category, refetchShell }) {
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
                  {wallsInputFields.map((field) => (
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

export default AddWalls;
