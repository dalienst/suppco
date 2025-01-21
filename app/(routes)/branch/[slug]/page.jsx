"use client";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import UserTable from "@/components/tables/InfoTable";
import { branchColumn } from "@/data/columns";
import { useFetchBranchDetail } from "@/dataActions/branches/branchesActions";
import Link from "next/link";
import { useEffect, useState } from "react";

function BranchDashboard({ params: { slug } }) {
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
  } = useFetchBranchDetail(slug);

  console.log('my branch',branch)

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
    rows.forEach((item) => {
      const { sublayeritem } = item;
      const group = grouped.get(sublayeritem) || [];
      group.push(item);
      grouped.set(sublayeritem, group);
    });
    setGroupedData(Array.from(grouped.entries()));
    }
  }, [branch, isSuccess]);

  useEffect(()=>{
      const names = rows.filter((item) => item.sublayeritem === filterName);
      setNewRows(names);
  },[rows, filterName]);

  const handleView = (name) => {
    setFilterName(name);
    setSecondTable(true);
  }

  return (
  <div className="h-[calc(100vh-115px)]">
    <div className="py-4 lg:p-4 h-full">
      <div className="lg:hidden flex flex-col">
      <span className="text-lg md:text-xl font-semibold">{branch?.name}</span> 
      <span className="text-[#707070] text-sm">{branch?.location} Branch</span>
      </div>
      <hr className="lg:hidden mb-4 mt-3"/>
      <div>
        <div className="flex justify-between gap-4 mb-3">
          <span className="font-semibold text-lg">{branch?.name} Inventory</span>
          <Link href={`/branch/${slug}/shell`}>
          <Button variant="outline" className='text-blue900 bg-blue-50 border-blue-200'>+ Add product</Button>
          </Link>
        </div>
        <hr className="lg:hidden mb-4 mt-3"/>
      {!secondTable && groupedData.length > 0 && 
       <div className="mb-3">
      <Input className='w-fit border mb-3' type="text" placeholder="Search by Category" onChange={(e) => setSearchTerm(e.target.value)} />
        <table style={{"width":"100%"}}>
          <thead>
            <tr>
              <th className="text-left">Category</th>
              <th className="w-[20%]">Action</th>
            </tr>
          </thead>
          <tbody>
          {groupedData
          .filter(([name]) => name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(([name])=>(
            <tr key={name}>
              <td>{name}</td>
              <td className="text-center">
              <Button variant='outline' className='border border-[#707070] text-[#707070]' onClick={()=>handleView(name)}>View products</Button>
              </td>
            </tr>
        ))}
          </tbody>
        </table>
      </div>}
      {groupedData.length === 0 && <p className="text-center h-[70vh] grid place-content-center">This branch does not have any inventory. Products you add will be shown here.</p> }
        {newRows.length > 0 && secondTable ? 
        <div>
          <Button className='mb-3' onClick={()=>setSecondTable(false)}>Close</Button>
          <UserTable rows={newRows} columns={branchColumn} redirectLink={`${slug}/product-detail`} />
        </div>
         : null}
      </div>
    </div>
    </div>
    )
}

export default BranchDashboard;
