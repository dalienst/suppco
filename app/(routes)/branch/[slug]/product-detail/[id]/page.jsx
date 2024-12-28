'use client'

import { Button } from "@/app/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog"
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner"
import useFetchShellEquipmentDetail from "@/dataActions/shell/fetchShellEquipment"

const keysToExclude = ['user', 'supplier_company', 'slug', 'reference', 'layer', 'created_at', 'updated_at', 'company','branch','employees'];

function ProductDetail({params:{id}}) {
    const {isLoading , data} = useFetchShellEquipmentDetail(id)
    if(isLoading) return <SupplierLoadingSpinner/>
    const formatKey = (key) => {
        return key
          .replace(/_/g, ' ')
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' '); 
      };
    const filteredData = Object.entries(data).filter(([key, value]) => 
        value !== '' && value !== null && value !== undefined && value !== false && !keysToExclude.includes(key)
      );
  return (
    <div className="pt-4 overflow-hidden">
         <div className='flex justify-between items-center gap-5 mb-3'>
            <span className="font-semibold text-xl">Product details</span>
            <div>
                <Button variant='outline' className='text-blue-600 h-8 mr-2 border-blue-600'>Edit</Button>
                <Dialog>
      <DialogTrigger asChild>
      <Button variant='outline' className='text-red-500 h-8 border-red-500'>Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete product</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this product?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button >Cancel</Button>
          <Button type="submit">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
            </div>
        </div>
        <hr />
    <div className="overflow-auto">
    <ul className="border rounded-xl p-3 mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-3">
      {filteredData.map(([key, value]) => (
        <li key={key} className="flex flex-col">
          <span className="font-medium">{formatKey(key)}</span> 
          <span className="border rounded-lg p-2 text-sm text-[#696969]">{String(value)}</span>
        </li>
      ))}
    </ul>
    </div>
  </div>
  )
}

export default ProductDetail