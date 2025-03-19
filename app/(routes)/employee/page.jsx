'use client';

import useFetchProfile from "@/dataActions/accounts/FetchProfile";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getEmployeeDetail } from "@/services/employees";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

function EmployeeDashboard() {
    const axios = useAxiosAuth()

    const {
        data: profile,
      } = useFetchProfile();

      const { data: employee } = useQuery({
        queryKey: ["employeeDashboard"],
        queryFn: () => getEmployeeDetail(axios, profile?.slug),
        enabled: !!profile?.slug,
      });
  return (
    <div>
        <nav className='flex justify-between items-center'>
            <div className="flex gap-1 mb-3">
                <Image src='/logo.png' alt='logo' width={50} height={45} />
                <h2 className="font-bold text-2xl">SUPPCO</h2>
            </div>
            <div>
                <Image
                    src={subcontractor?.user?.avatar ? subcontractor?.user?.avatar : '/user.png'}
                    alt="logo"
                    width={24}
                    height={24}
                    className="rounded-full h-[24px] w-[24px] object-cover"
                />
            </div>
        </nav>
    </div>
  )
}

export default EmployeeDashboard