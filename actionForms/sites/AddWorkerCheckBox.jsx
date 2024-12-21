import useAxiosAuth from "@/hooks/useAxiosAuth";
import { updateSite } from "@/services/sites";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function AddWorkerCheckbox({ site, profile, slug, refetchSite }) {
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();

  return (
    <Formik
      enableReinitialize
      initialValues={{
        employees: site?.employees || [],
      }}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const formData = new FormData();
          values.employees.forEach((employee) =>
            formData.append("employees", employee)
          );

          await updateSite(slug, formData, axios);
          toast.success("Workers added successfully. Refreshing...");
          refetchSite();
        } catch (error) {
          toast.error("Failed to add workers");
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <section>
            <div className="border mt-3 rounded-xl">
              <div>
                <div className="flex justify-between items-center py-6 px-4">
                  <label className="text-sm font-semibold">Select Worker</label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        const allWorkers =
                          profile?.companies?.company_workers?.map(
                            (worker) => worker.email
                          );
                        setFieldValue("employees", isChecked ? allWorkers : []);
                      }}
                      checked={
                        values.employees.length ===
                        profile?.companies?.company_workers?.length
                      }
                    />
                    <label className="text-sm">Select All</label>
                  </div>
                </div>
                <div className="px-4">
                  {profile?.companies?.company_workers?.map((worker) => (
                    <div key={worker?.id} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={`worker-${worker?.id}`}
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
                        htmlFor={`worker-${worker?.id}`}
                        className="text-sm"
                      >
                        {worker?.email}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <div className="mt-3">
            <button
              type="submit"
              disabled={loading}
              className={`bg-primary text-white px-4 py-2 rounded-lg ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Processing..." : "Add Worker"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AddWorkerCheckbox;
