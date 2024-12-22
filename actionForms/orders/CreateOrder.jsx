"use client";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createOrder } from "@/services/orders";

function CreateOrder({company, site}) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
    <Formik
      initialValues={{
        company: company?.slug,
        site: "", // use site reference
        shell_equipment: "", // use shell equipment reference
        employees: [], // not necessarily required
        status: "Pending", // select field but for creating an order, it should be Pending by default. Later when supplier accepts, it should be changed to Accepted
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const formData = new FormData();
          formData.append("company", company?.slug);
          formData.append("site", site?.reference);
          formData.append("shell_equipment", values.shell_equipment);
          values.employees.forEach((employee) =>
            formData.append("employees", employee)
          );
          formData.append("status", 'Pending');

          await createOrder(formData, axios);
          toast.success("Order created successfully. Refreshing...");
          setLoading(false);
        } catch (error) {
          toast.error("Failed to create order");
          setLoading(false);
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ values, setFieldValue }) => 
      <Form>
        {/* <div>
                        <div className="flex justify-between items-center pt-3">
                        <span className="text-lg underline">Allocate site(s) to subcontractor:</span>
                        </div>
                        <Field as="select" name="site" className='p-2 rounded-lg'>
                          <option value="">Select a site </option>
                          {sites?.map((site) => (
                            <option key={site?.reference} value={site?.reference}>
                              {site?.name}-{site?.address}
                            </option>
                          ))}
                        </Field>
                      </div> */}
        </Form>
        }
    </Formik>
  );
}

export default CreateOrder;
