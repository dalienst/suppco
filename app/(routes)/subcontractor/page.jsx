"use client";

import OrderTracker from "@/components/OrderTracker";
import useFetchProfile from "@/dataActions/accounts/FetchProfile";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getSubContractorDetail } from "@/services/subContractors";
import { useQuery } from "@tanstack/react-query";
import { Dot, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

function BranchDashboard() {
  const axios = useAxiosAuth();
  const { data: profile } = useFetchProfile();
  const { data: subcontractor } = useQuery({
    queryKey: ["subcontractor", profile?.slug],
    queryFn: () => getSubContractorDetail(axios, profile?.slug),
    enabled: !!profile?.slug,
  });

  return (
    <div className="mt-8 flex flex-col gap-5">
      <div className=''>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
        <div className="border p-2 lg:p-4 rounded-lg lg:rounded-xl flex items-center gap-1 lg:gap-4">
          <Image src="/branches.png" alt="Sites" width={60} height={60} />
          <div className="flex-grow space-x-1 lg:space-x-4 text-sm lg:text-base">
            <span>Sites</span>
            <span className="block leading-none">3</span>
          </div>
        </div>
        <div className="border p-2 lg:p-4 rounded-lg lg:rounded-xl flex items-center gap-1 lg:gap-4">
          <Image src="/employees.png" alt="Employees" width={60} height={60} />
          <div className="flex-grow space-x-1 lg:space-x-4 text-sm lg:text-base">
            <span>Subcontractors</span>
            <span className="block leading-none">3</span>
          </div>
        </div>
        <div className="border p-2 lg:p-4 rounded-lg lg:rounded-xl flex items-center gap-1 lg:gap-4">
          <Image src="/employees.png" alt="Employees" width={60} height={60} />
          <div className="flex-grow space-x-1 lg:space-x-4 text-sm lg:text-base">
            <span>Workers</span>
            <span className="block leading-none">16</span>
          </div>
        </div>
      </section>
      <section className="border my-12 rounded-xl p-4">
        <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex lg:flex-col mb-3 lg:mb-0 justify-between gap-5">
          <div>
            <p>Total Orders</p>
            <p className='text-sm text-[#505050]'>Last 30 days</p>
          <p className='font-bold text-lg mt-3 md:text-2xl'>Ksh 120,000</p>
          </div>
        </div>
        <div>
          <OrderTracker/>
        </div>
        </div>
        <p className=''>Orders for approval</p>
      </section>
      <section>
        <h2 className="text-xl md:text-2xl mb-3">
          Transaction History
        </h2>
        <div className="w-full overflow-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr>
                <th>Supplier</th>
                <th>Product</th>
                <th>Status</th>
                <th>Date</th>
                <th>Invoice</th>
                <th className="text-center">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex gap-1">
                  <Image
                    src={
                      subcontractor?.user?.avatar
                        ? subcontractor?.user?.avatar
                        : "/user.png"
                    }
                    alt="logo"
                    width={40}
                    height={40}
                    className="rounded-full h-[40px] w-[40px] object-cover"
                  />
                  <div>
                    <span>Mike Lowry</span>
                    <span className="block leading-none text-sm text-[#505050]">
                      mike@lowry.com
                    </span>
                  </div>
                </td>
                <td>Ready mix</td>
                <td>
                  <span className="flex rounded-full w-fit py-1 px-4 border">
                    <Dot className="text-green-600" />
                    Completed
                  </span>
                </td>
                <td>Mar 3, 2025</td>
                <td className="text-sm">KSH 45,000</td>
                <td className="text-center">
                  <button>
                    <SquareArrowOutUpRight size={16} />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="flex gap-1">
                  <Image
                    src={
                      subcontractor?.user?.avatar
                        ? subcontractor?.user?.avatar
                        : "/user.png"
                    }
                    alt="logo"
                    width={40}
                    height={40}
                    className="rounded-full h-[40px] w-[40px] object-cover"
                  />
                  <div>
                    <span>Tommy Hilfiger</span>
                    <span className="block leading-none text-sm text-[#505050]">
                      mike@lowry.com
                    </span>
                  </div>
                </td>
                <td>Ready mix</td>
                <td>
                  <span className="flex rounded-full w-fit py-1 px-4 border">
                    <Dot className="text-yellow-400" /> Pending
                  </span>
                </td>
                <td>Mar 3, 2025</td>
                <td className="text-sm">KSH 45,000</td>
                <td className="text-center">
                  <button>
                    <SquareArrowOutUpRight size={16} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      </div>
    </div>
  );
}

export default BranchDashboard;
