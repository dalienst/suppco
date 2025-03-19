'use client';

import useAxiosAuth from "@/hooks/useAxiosAuth";
import Navbar from "./navbar/Navbar"
import Sidebar from "./sidebar/Sidebar"
import useFetchProfile from "@/dataActions/accounts/FetchProfile";
import { useQuery } from "@tanstack/react-query";
import { getSubContractorDetail } from "@/services/subContractors";

function SubcontractorLayout({ children }) {
  const axios = useAxiosAuth()
    const {
        data: profile,
      } = useFetchProfile();

      const { data: subcontractor } = useQuery({
        queryKey: ["subcontractor", profile?.slug],
        queryFn: () => getSubContractorDetail(axios, profile?.slug),
        enabled: !!profile?.slug,
      });
  return (
      <div className="flex relative">
        <div className="absolute z-50 -top-5 md:top-0 right-[40px] md:relative md:right-0 md:flex-[1.5] lg:flex-1">
          <Sidebar />
        </div>
        <div className="flex-1 md:flex-[4] lg:flex-[5] border h-screen overflow-y-auto overflow-x-hidden border-l-2 px-4">
          <Navbar subcontractor={subcontractor} />
          {children}
        </div>
      </div>
  )
}

export default SubcontractorLayout