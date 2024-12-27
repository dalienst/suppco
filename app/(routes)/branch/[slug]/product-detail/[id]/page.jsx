'use client'

import { Button } from "@/app/components/ui/button"
import useFetchShellEquipmentDetail from "@/dataActions/shell/fetchShellEquipment"

function ProductDetail() {
    const {isLoading , data} = useFetchShellEquipmentDetail()
    console.log(data,'data from shell equipment detail')
  return (
    <div className="pt-4 overflow-hidden">
        <div className='flex justify-between items-center gap-5 mb-3'>
            <span className="font-semibold text-xl">Product name</span>
            <div>
                <Button variant='outline' className='text-blue-600 h-8 mr-2 border-blue-600'>Edit</Button>
                <Button variant='outline' className='text-red-500 h-8 border-red-500'>Delete</Button>
            </div>
        </div>
        <hr />
        <span className="font-semibold text-xl block py-2">Product Details</span>
        <hr />
        <div className="w-full overflow-x-auto mt-2 pb-4">
        <table className="border">
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
        <hr />
        <span className="font-semibold text-xl block py-2">Delivery Information</span>
        <hr />
        <div className="mt-2 border rounded-lg overflow-hidden">
            <span className="bg-blue-800 px-3 py-1 text-white block w-full">Delivery Details</span>
            <div className="p-3">
            <span className="block">
                <span className="font-semibold">Availability:</span>
                <span>Yes</span>
            </span>
            <span className="block">
                <span className="font-semibold">Pricing criteria:</span>
                <span>Distance(km)</span>
            </span>
            <span className="">
                <span className="font-semibold">Cost:</span>
                <span>1000</span>
            </span>
            </div>
        </div>
        <hr />
        <span className="font-semibold text-xl block py-2">Payment Information</span>
        <hr />
        <div className="mt-2 border rounded-lg overflow-hidden">
            <span className="bg-blue-800 px-3 py-1 text-white block w-full">Payment Details</span>
            <div className="p-3">
            <span className="block">
                <span className="font-semibold">Quantity:</span>
                <span>500 bags</span>
            </span>
            <span className="block">
                <span className="font-semibold">Price per bag:</span>
                <span>Ksh 800</span>
            </span>
            <span className='font-semibold'>Payment plan:</span>
            <div className="w-full overflow-x-auto mt-2 pb-4">
        <table className="border">
            <thead>
                <tr>
                    <td className="border px-2">Plan</td>
                    <td className="border px-2">Condition</td>
                    <td className="border px-2">Deposit</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-2">Fixed upfront payment</td>
                    <td className="border px-2">Upfront payment</td>
                    <td className="border px-2">0</td>
                </tr>
            </tbody>
        </table>
        </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail