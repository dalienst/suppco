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
        return [...prevState, value];
      } else {
        return prevState.filter((email) => email !== value);
      }
    });
  };

  if (siteLoading) {
    return <SupplierLoadingSpinner />;
  }

  return (
    <div className="p-3 h-[calc(100vh-55px)] ">
      <div>
        <div className="flex justify-between my-3">
          <h2 className="text-xl font-semibold">Employees</h2>

          <div className="relative">
            <button
              onClick={() => setOpenEmployeeSelectionPanel((prev) => !prev)}
              className="border border-grayBlue rounded-lg p-2 flex gap-2 items-center"
            >
              <span>Add employee(s)</span>
              <ChevronDown size={16} />
            </button>

            {openEmployeeSelectionPanel && (
              <div className="absolute bg-white z-50 mt-2 border shadow rounded-lg right-0 p-2 w-[320px]">
                <AddWorkerCheckbox
                  site={site}
                  profile={profile}
                  slug={slug}
                  refetchSite={refetchSite}
                  closeEmployeeSelectionPanel={() =>
                    setOpenEmployeeSelectionPanel(false)
                  }
                />
              </div>
            )}
          </div>
        </div>
        {siteLoading ? (
          <SupplierLoadingSpinner />
        ) : site?.employees_details && site?.employees_details?.length > 0 ? (
          <UserTable
            rows={site?.employees_details}
            columns={employeeColumn}
            redirectLink={`/sites/${slug}/employees`}
          />
        ) : (
          <div className="place-content-center text-center">
            <h6>You have no Employees</h6>
          </div>
        )}
      </div>
    </div>
  );
}

export default SiteEmployees;
