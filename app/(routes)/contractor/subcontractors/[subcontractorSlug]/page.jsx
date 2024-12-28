"use client";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import { ChevronRight, CircleUser } from "lucide-react";
import Image from "next/image";
import { useFetchSubContractorDetail } from "@/dataActions/subcontractors/subcontractorActions";

function EmployeeDetail({ params: { subcontractorSlug } }) {
  const {
    isLoading: isLoadingWorker,
    data: worker,
    refetch: refetchWorker,
  } = useFetchSubContractorDetail(subcontractorSlug);
  if (isLoadingWorker) {
    return (
        <SupplierLoadingSpinner/>
    );
  }

  return (
          <div className="p-4 bg-[#f9f9f9] h-full">
            <h1 className="flex items-center gap-2">Employees <ChevronRight size={16}/> <span className="bg-[#ececec] rounded-full px-3 py-1 text-[13px]">{worker?.user?.first_name} {worker?.user?.last_name}</span> </h1>
            <div className="my-4 flex items-center gap-4">
            <div>
            {worker?.user?.avatar ? (
              <div>
                <Image
                src={worker?.user?.avatar}
                alt="logo"
                width={70}
                height={70}
                className="rounded-full h-[70px] w-[70px] object-cover"
              />
              </div>
            ) : (
              <CircleUser
                strokeWidth={1}
                className="size-[70px] text-neutral-700"
              />
            )}
            </div>
            <div>
              <span className="font-semibold text-lg">{worker?.user?.first_name} {worker?.user?.last_name}</span>
              <span className="leading-none block text-sm">Role</span>
            </div>
          </div>
          <div className="bg-white rounded-xl p-3 md:p-5">
            <div className="border rounded-xl p-3">
            <span className="font-semibold block mb-3">Personal Information</span>
            <ul className="flex flex-col md:flex-row justify-between gap-2 md:gap-5">
              <li className="flex md:block justify-between items-center">
                <span className='text-[#565b64] text-sm font-medium'>First Name</span>
                <span className="text-[15px] block">{worker?.user?.first_name}</span>
              </li>
              <li className="flex md:block justify-between items-center">
                <span className='text-[#565b64] text-sm font-medium'>Last Name</span>
                <span className="text-[15px] block">{worker?.user?.last_name}</span>
              </li>
              <li className="flex md:block justify-between items-center">
                <span className='text-[#565b64] text-sm font-medium'>Email</span>
                <span className="text-[15px] block">{worker?.user?.email}</span>
              </li>
              <li className="flex md:block justify-between items-center">
                <span className='text-[#565b64] text-sm font-medium'>Phone</span>
                <span className="text-[15px] block">{worker?.user?.phone ? worker?.user?.phone : '-' }</span>
              </li>
            </ul>
            </div>
            <div className="border rounded-xl p-3 mt-5">
            <span className="font-semibold block mb-3">Other Details</span>
            <ul className="flex flex-col md:flex-row justify-between gap-2 md:gap-5">
            <li className="flex md:block justify-between items-center">
                <span className='text-[#565b64] text-sm font-medium'>Site</span>
                <span className="text-[15px] block">{worker?.site ? worker?.site : '-'}</span>
              </li>
            <li className="flex md:block justify-between items-center">
                <span className='text-[#565b64] text-sm font-medium'>KRA PIN</span>
                <span className="text-[15px] block">{worker?.user?.kra_pin ? worker?.user?.kra_pin : '-'}</span>
              </li>
              <li className="flex md:block justify-between items-center">
                <span className='text-[#565b64] text-sm font-medium'>Location</span>
                <span className="text-[15px] block">{worker?.user?.location ? worker?.user?.location : '-'}</span>
              </li>
              <li className="flex md:block justify-between items-center">
                <span className='text-[#565b64] text-sm font-medium'>Identification</span>
                <span className="text-[15px] block">{worker?.user?.identification ? worker?.user?.identification : '-'}</span>
              </li>
            </ul>
            </div>
          </div>
          </div>
  );
}

export default EmployeeDetail;
