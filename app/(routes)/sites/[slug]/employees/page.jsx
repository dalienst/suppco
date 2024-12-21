"use client";
import { useEffect, useState } from "react";
import useFetchSiteDetail from "@/dataActions/site-equipment/FetchSiteDetail";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import UserTable from "@/components/tables/InfoTable";
import { employeeColumn } from "@/data/columns";
import { Button } from "@/app/components/ui/button";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import useUserId from "@/hooks/useUserId";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/accounts";
import { ChevronDown } from "lucide-react";
import AddWorker from "@/actionForms/sites/AddWorker";
import AddWorkerCheckbox from "@/actionForms/sites/AddWorkerCheckBox";

function SiteEmployees({ params: { slug } }) {
  const [open, setOpen] = useState(false);
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);
  const [openEmployeeSelectionPanel, setOpenEmployeeSelectionPanel] =
    useState(false);
  const axios = useAxiosAuth();
  const userId = useUserId();

  const { isLoading: isLoadingUser, data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUser(userId, axios),
  });

  const {
    isLoading: siteLoading,
    data: site,
    refetch: refetchSite,
  } = useFetchSiteDetail(slug);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setSelectedEmployeeIds((prevState) => {
      if (checked) {
        // Add value to the array if checked
        return [...prevState, value];
      } else {
        // Remove value from the array if unchecked
        return prevState.filter((email) => email !== value);
      }
    });

    console.log(selectedEmployeeIds);
  };

  useEffect(() => {
    console.log(selectedEmployeeIds);
  }, [selectedEmployeeIds]);

  if (siteLoading) {
    return <SupplierLoadingSpinner />;
  }

  return (
    <div className="p-3">
      <div>
        <div className="flex justify-between my-3">
          <h2 className="text-xl font-semibold">Your Employees</h2>

          {/* FIX: Adding employees */}
          {/* TODO: I don't know how you will handle this */}
          {/* Create a table or sth or a modal */}
          <section>
            <h2 className="text-xl font-semibold">Add Employee</h2>

            <section className="mb-3">
              {/*1️⃣ Using checkboxes */}
              <AddWorkerCheckbox
                site={site}
                profile={profile}
                slug={slug}
                refetchSite={refetchSite}
              />
            </section>

            {/* Choose your favourite  💀☠️*/}

            {/* 2️⃣Using select multiple */}
            <AddWorker
              site={site}
              profile={profile}
              slug={slug}
              refetchSite={refetchSite}
            />
          </section>
          {/* End */}

          <div className="relative">
            {!openEmployeeSelectionPanel ? (
              <button
                onClick={() => setOpenEmployeeSelectionPanel((prev) => !prev)}
                className="border border-grayBlue rounded-lg p-2 flex gap-2 items-center"
              >
                <span>Add employee(s) to this site</span>
                <ChevronDown size={16} />
              </button>
            ) : (
              <div className="w-[300px] flex justify-between gap-2">
                <Button disabled={selectedEmployeeIds.length === 0}>
                  Add employee(s)
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setOpenEmployeeSelectionPanel(false)}
                >
                  Cancel
                </Button>
              </div>
            )}
            {openEmployeeSelectionPanel && (
              <ul className="absolute bg-white z-50 mt-2 border shadow max-h-[300px] overflow-auto rounded-lg right-0 p-2 w-[300px]">
                <span className="text-lg underline">Select employee(s) :</span>
                {profile?.companies?.company_workers?.map((worker) => (
                  <li key={worker?.id} className="py-2">
                    <label className="flex gap-1 text-[#6c6c6c] text-sm items-center">
                      <input
                        type="checkbox"
                        name={worker?.email}
                        value={worker?.email}
                        onChange={handleCheckboxChange}
                      />
                      {worker?.user?.first_name}
                      {worker?.user?.last_name}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* Fetch with site?.employees and not site?.site_workers */}
        {/* {siteLoading ? (
          <SupplierLoadingSpinner />
        ) : site?.employees && site?.employees?.length > 0 ? (
          <UserTable
            
            rows={site?.site_workers}
            columns={employeeColumn}
            redirectLink={`/sites/${slug}/employees/`}
          />
        ) : (
          <div className="place-content-center text-center">
            <h6>You have no Employees</h6>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default SiteEmployees;
