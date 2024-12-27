'use client'

import { Button } from "@/app/components/ui/button"
import useFetchShellEquipmentDetail from "@/dataActions/shell/fetchShellEquipment"

function ProductDetail() {
    const {isLoading , data} = useFetchShellEquipmentDetail()
    console.log(data,'data from shell equipment detail')
  return (
    <div className="pt-4">
        <div className='flex justify-between items-center gap-5'>
            <span className="font-semibold text-xl">Product name</span>
            <div>
                <Button variant='outline' className='text-blue-600 h-8 mr-2 border-blue-600'>Edit</Button>
                <Button variant='outline' className='text-red-500 h-8 border-red-500'>Delete</Button>
            </div>
        </div>
        <hr />
        <span className="font-semibold text-xl">Product Details</span>
        <hr />
        <div className="w-full overflow-hidden">
        <table className="border overflow-auto">
            <thead>
                <tr>
                    <td className="border px-2">Name</td>
                    <td className="border px-2">Grade</td>
                    <td className="border px-2">Brand</td>
                    <td className="border px-2">Description</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-2">Bamburi cement</td>
                    <td className="border px-2">Grade 1</td>
                    <td className="border px-2">Bamburi</td>
                    <td className="border px-2">Dummy description</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default ProductDetail