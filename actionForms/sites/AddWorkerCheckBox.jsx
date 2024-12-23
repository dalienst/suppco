import { Button } from "@/app/components/ui/button";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { updateSite } from "@/services/sites";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";

function AddWorkerCheckbox({ site, profile, slug, refetchSite, closeEmployeeSelectionPanel }) {
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
              <div>
                <div className="flex justify-between items-center">
                <span className="text-lg underline">Select employee(s) :</span>
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
                    <span className="text-sm">Select All</span>
                  </div>
                </div>
                <ul className="max-h-[300px] overflow-auto">
                  {profile?.companies?.company_workers?.map((worker) => (
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
                        {worker?.email}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
          <div className="w-[300px] mt-3 flex justify-between gap-2">
                          <Button disabled={loading}>
                            Add employee(s)
                          </Button>
                          <Button
                            variant="outline"
                            disabled={loading}
                            type='button'
                            onClick={closeEmployeeSelectionPanel}
                          >
                            Cancel
                          </Button>
                        </div>
        </Form>
      )}
    </Formik>
  );
}

export default AddWorkerCheckbox;
