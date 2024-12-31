"use client";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { createOrder } from "@/services/orders";
import { Button } from "@/app/components/ui/button";
import { Loader2 } from "lucide-react";
import { Label } from "@/app/components/ui/label";

const paymentInfoKeys = [
  "is_payment_on_delivery",
  "is_fixed",
  "is_fixed_fifty",
  "is_negotiable",
  "deposit_percentage",
];

function CreateOrderForm({ company, site, supplier, filters}) {
  const [loading, setLoading] = useState(false);
  const params = new URLSearchParams();

// Append each key-value pair from the filters object
for (const [key, value] of Object.entries(filters)) {
    params.append(key, value);
}
  const getFormattedKey = (key) => {
    switch (key) {
      case "is_fixed":
        return "Fixed Payment plan";
      case "is_fixed_fifty":
        return "50-50 Payment plan";
      case "is_negotiable":
        return "Negotiable Payment plan";
      case "is_payment_on_delivery":
        return "Payment on Delivery";
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={{
        company: '',
        site: "", // use site reference
        shell_equipment: "", // use shell equipment reference
        employees: [], // not necessarily required
        status: "Pending",
        orderSpecifications: {},
        self_delivery:false,
        quantity:'',
        destination:'',
        eta:'',
        delivery_charges:'',
        is_fixed:false,
        is_fixed_fifty: false,
        is_negotiable: false,
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const formData = new FormData();
          formData.append("company", company?.reference);
          formData.append("site", site?.reference);
          formData.append("shell_equipment", supplier?.reference);
          formData.append("delivery_charges", supplier?.delivery_charges);
          formData.append("orderSpecifications", params.toString());
          formData.append("status", "Pending");
          formData.append("employees", values.employees);
          formData.append("quantity", values.quantity);
          formData.append("self_delivery", values.self_delivery);
          formData.append("destination", values.destination);
          formData.append("eta", values.eta);
          formData.append("payment", values.payment);
          formData.append("is_fixed", values.is_fixed);
          formData.append("is_fixed_fifty", values.is_fixed_fifty);
          formData.append("is_negotiable", values.is_negotiable);
          console.log(formData)
          // await createOrder(formData, axios);
          // toast.success("Order created successfully. Refreshing...");
        } catch (error) {
          toast.error("Failed to create order");
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <h1 className="font-semibold text-lg">Order Form</h1>
          <div className="flex flex-col gap-1">
            <Label htmlFor="quantity">Quantity</Label>
            <Field
              type="text"
              required
              name="quantity"
              className="border rounded-lg p-2"
            />
          </div>
          <div>
              <span className="text-lg underline">Allocate staff</span>
            <ul className="max-h-[300px] overflow-auto">
                  {site?.employees_details?.map((worker) => (
                    <li key={worker?.id} className="flex items-center py-2">
                      <input
                        type="checkbox"
                        id={worker?.id}
                        className="mr-2"
                        value={worker?.email}
                        checked={values.employees.includes(worker?.email)}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          const updatedEmployees = isChecked
                            ? [...values.employees, worker.email]
                            : values.employees.filter(
                                (email) => email !== worker.email
                              );
                          setFieldValue("employees", updatedEmployees);
                        }}
                      />
                      <label
                        htmlFor={worker?.id}
                        className="text-sm"
                      >
                        {worker?.first_name} {worker?.last_name}
                      </label>
                    </li>
                  ))}
                </ul>
          </div>
          <div>
            <span className="font-semibold text-lg block">
              Delivery Details
            </span>
            <hr />
            <div>
              <div className="flex justify-between items-center pt-3">
                <span>Delivery option</span>
              </div>
              <Field
                as="select"
                name="self_delivery"
                className="p-2 rounded-lg"
              >
                <option value="">Choose an option</option>
                <option value={true}>Pickup</option>
                <option value={false}>Be delivered</option>
              </Field>
            </div>
            <div>
            <div className="flex flex-col gap-1">
            <Label htmlFor="destination">Delivery destination</Label>
            <Field
              type="text"
              required
              name="destination"
              className="border rounded-lg p-2"
            />
          </div>
            </div>
            <div>
            <div className="flex flex-col gap-1">
            <Label htmlFor="eta">Expected date of delivery</Label>
            <Field
              type="date"
              required
              name="eta"
              className="border rounded-lg p-2"
            />
          </div>
            </div>
            <div></div>
            
          </div>
          <div className="mt-3 mx-2">
              <span className="font-medium ">Payment Details</span>
              <Field
                as="select"
                name="payment"
                className="p-2 rounded-lg"
              >
                {paymentInfoKeys.map((key) => {
                      const value = supplier[key];
                      if (value) {
                        return (
                            <option key={key} value={key} className="mb-3">
                              {getFormattedKey(key)} 
                            </option>
                        );
                      }
                      return null;
                    })}
                
              </Field>
              </div>
          <Button disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : "Order"}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default CreateOrderForm;
