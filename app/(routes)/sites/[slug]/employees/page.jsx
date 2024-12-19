"use client"
import { useState } from 'react'
import useFetchSiteDetail from '@/dataActions/site-equipment/FetchSiteDetail';
import SupplierLoadingSpinner from '@/components/supplier/LoadingSpinner';
import UserTable from '@/components/tables/InfoTable';
import { employeeColumn } from '@/data/columns';
import { Button } from '@/app/components/ui/button';
import useAxiosAuth from '@/hooks/useAxiosAuth';
import useUserId from '@/hooks/useUserId';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/services/accounts';
import { ChevronDown } from 'lucide-react';

function SiteEmployees({ params: { slug } }) {
  const [open, setOpen] = useState(false);
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);
  const [openEmployeeSelectionPanel, setOpenEmployeeSelectionPanel] = useState(false);
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
      setSelectedEmployeeIds(prevState => {
        if (checked) {
          return [...prevState, value];
        } else {
          return prevState.filter(id => id !== value);
        }
      });
    };
    console.log(selectedEmployeeIds)

    if (siteLoading) {
        return (<SupplierLoadingSpinner />)
    }

    return (
        <div className="p-3">
             <div>
             <div className="flex justify-between my-3">
          <h2 className="text-xl font-semibold">Your Employees</h2>
          <div className='relative'>
          {!openEmployeeSelectionPanel ? 
          <button onClick={()=>setOpenEmployeeSelectionPanel(prev=>!prev)} className='border border-grayBlue rounded-lg p-2 flex gap-2 items-center'>
            <span>Add employee(s) to this site</span>
            <ChevronDown size={16} />
          </button>
          :
          <div className='w-[300px] flex justify-between gap-2'>
            <Button disabled={selectedEmployeeIds.length === 0}>Add employee(s)</Button>
            <Button variant='outline' onClick={()=>setOpenEmployeeSelectionPanel(false)}>Cancel</Button>
          </div>
          }
        {openEmployeeSelectionPanel && 
        <ul className='absolute bg-white z-50 mt-2 border shadow max-h-[300px] overflow-auto rounded-lg right-0 p-2 w-[300px]'>
        <span className='text-lg underline'>Select employee(s) :</span>
          {profile?.companies?.company_workers?.map((worker)=>(
            <li key={worker?.id} className='py-2'>
              <label className="flex gap-1 text-[#6c6c6c] text-sm items-center">
                <input
                  type="checkbox"
                  name={worker?.id}
                  onChange={handleCheckboxChange}
                  value={worker?.id}
                />
                {worker?.user?.first_name}{worker?.user?.last_name}
              </label>
            </li>
          ))}
        </ul>}
        </div>
        </div>
          {siteLoading ? (
            <SupplierLoadingSpinner />
          ) : site?.site_workers && site?.site_workers?.length > 0 ?  (
            <UserTable rows={site?.site_workers} columns={employeeColumn} redirectLink={`/sites/${slug}/employees/`}/>
          ) : (
            <div className="place-content-center text-center">
              <h6>You have no Employees</h6>
            </div>
          )}
        </div>
        </div>
    )
}

export default SiteEmployees