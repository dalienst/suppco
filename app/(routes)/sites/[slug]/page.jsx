"use client";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import UserTable from "@/components/tables/InfoTable";
import { branchColumn } from "@/data/columns";
import useFetchSiteDetail from "@/dataActions/site-equipment/FetchSiteDetail";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function SiteDashboard({ params: { slug } }) {
  const [rows, setRows] = useState([])
  const [groupedData, setGroupedData] = useState([]);
  const [newRows, setNewRows] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [secondTable, setSecondTable] = useState(false);

  const {
    isLoading: isLoadingBranch,
    data: branch,
    refetch: refetchBranch,
    isSuccess
  } = useFetchSiteDetail(slug);

  console.log(branch,'site details page')

  useEffect(() => {
    if (isSuccess) {
      const rows = branch?.shell_equipments_branch?.map((obj) => {
        return {
          ...obj,
          id: obj.slug,
        };
      });
      setRows(rows);
      const grouped = new Map();
    rows?.forEach((item) => {
      const { sublayeritem } = item;
      const group = grouped.get(sublayeritem) || [];
      group.push(item);
      grouped.set(sublayeritem, group);
    });
    setGroupedData(Array.from(grouped.entries()));
    }
  }, [branch, isSuccess]);

  useEffect(()=>{
      const names = rows?.filter((item) => item.sublayeritem === filterName);
      setNewRows(names);
  },[rows, filterName]);

  const handleView = (name) => {
    setFilterName(name);
    setSecondTable(true);
  }

  return (
  // <div className="h-[calc(100vh-115px)]">
  //   <div className="p-4 lg:p-4 h-full">
  //     <div className="lg:hidden flex flex-col">
  //     <span className="text-lg md:text-xl font-semibold">{branch?.name}</span> 
  //     <span className="text-[#707070] text-sm">{branch?.address} Site</span>
  //     </div>
  //     <hr className="lg:hidden mb-4 mt-3"/>
  //     <div>
  //       <div className="flex justify-between gap-4 mb-3">
  //         <span className="font-semibold text-lg">{branch?.name} Equipment</span>
  //         <Link href={``}>
  //         <Button variant="outline" className='text-blue900 bg-blue-50 border-blue-200'>+ Add equipment</Button>
  //         </Link>
  //       </div>
  //       <hr className="lg:hidden mb-4 mt-3"/>
  //     {!secondTable && groupedData?.length > 0 && 
  //      <div className="mb-3">
  //     <Input className='w-fit border mb-3' type="text" placeholder="Search by Category" onChange={(e) => setSearchTerm(e.target.value)} />
  //       <table style={{"width":"100%"}}>
  //         <thead>
  //           <tr>
  //             <th className="text-left">Category</th>
  //             <th className="w-[20%]">Action</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //         {groupedData?.filter(([name]) => name.toLowerCase().includes(searchTerm.toLowerCase()))
  //         .map(([name])=>(
  //           <tr key={name}>
  //             <td>{name}</td>
  //             <td className="text-center">
  //             <Button variant='outline' className='border border-[#707070] text-[#707070]' onClick={()=>handleView(name)}>View products</Button>
  //             </td>
  //           </tr>
  
  //       ))}
  //         </tbody>
  //       </table>
  //     </div>}
  //     {groupedData?.length === 0 && <p className="text-center h-[70vh] grid place-content-center">This site does not have any equipment. Equipment you add will be shown here.</p> }
  //       {newRows?.length > 0 && secondTable ? 
  //       <div>
  //         <Button className='mb-3' onClick={()=>setSecondTable(false)}>Close</Button>
  //         {/* <UserTable rows={newRows} columns={branchColumn} redirectLink='' /> */}
  //       </div>
  //        : null}
  //     </div>
  //   </div>
  //   </div>
  <div className="h-[calc(100vh-115px)]">
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 p-3">
                <div className="border p-2 lg:p-4 rounded-lg lg:rounded-xl flex items-center gap-1 lg:gap-4">
                  <div>
                    {branch?.logo ? (
                      <Image
                        src={branch?.logo}
                        alt="Logo"
                        width={40}
                        height={40}
                        className="rounded-full h-[40px] w-[40px] object-cover"
                      />
                    ) : (
                      <Image
                        src="/logo.png"
                        alt="Logo"
                        width={60}
                        height={60}
                      />
                    )}
                  </div>
                  <div className="text-sm lg:text-base">
                    <span>
                      {branch?.name}
                    </span>
                  </div>
                </div>
                <div className="border p-2 lg:p-4 rounded-lg lg:rounded-xl flex items-center gap-1 lg:gap-4">
                  <Image
                    src="/branches.png"
                    alt="Branches"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="flex-grow space-x-1 lg:space-x-4 text-sm lg:text-base">
                    <span>
                      {branch?.employees_details?.length}
                    </span>
                    <span>Employees</span>
                  </div>
                </div>
                <div className="border p-2 lg:p-4 rounded-lg lg:rounded-xl flex items-center gap-1 lg:gap-4">
                  <Image
                    src="/employees.png"
                    alt="Employees"
                    width={60}
                    height={60}
                    
                  />
                  <div className="flex-grow space-x-1 lg:space-x-4 text-sm lg:text-base">
                    <span>
                      {branch?.shell_equipment?.length}
                    </span>
                    <span className="">Site equipment</span>
                  </div>
                </div>
              </div>
  </div>
    )
}

export default SiteDashboard;
