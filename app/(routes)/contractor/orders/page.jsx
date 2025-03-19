"use client";

import { Button } from "@/app/components/ui/button";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getOrders } from "@/services/orders";
import { ShoppingCart, SquareArrowOutUpRight, SquareX, User } from "lucide-react";
import { format } from "date-fns";

const keysToExclude = ['user', 'company_info', 'slug','paymentType', 'reference', 'site', 'status', 'created_at', 'employees', 'is_fixed', 'is_fixed_fifty', 'is_negotiable', 'id', 'updated_at', 'company','orderSpecifications','shell_equipment_info','shell_equipment'];


function AllOrders() {
  const [details, setDetails] = useState(null);
  const [orderStatus, setOrderStatus] = useState('')
  const axios = useAxiosAuth();

  const {
    isLoading: isLoadingOrders,
    data: orders,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(axios),
  });
  
  const filteredOrders = orders?.filter(order => {
    if (orderStatus === '') return true;
    return order.status === orderStatus;
  });

  if (isLoadingOrders) return <SupplierLoadingSpinner />;

  const filteredOrderDetails = Object.entries(details || {})?.filter(
    ([key, value]) =>
      value !== "" &&
    value !== null &&
    value !== undefined &&
    value !== false &&
    !keysToExclude.includes(key)
  );

  const formatKey = (key) => {
    return key
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' '); 
  };
  const getFormattedKey = (key) => {
    switch (key) {
      case "is_fixed":
        return "Fixed Payment plan";
      case "is_fixed_fifty":
        return "50-50 Payment plan";
      case "is_negotiable":
        return "Negotiable Payment plan";
      case "is_payment_on_delivery":
        return "Payment on Delivery";
      default:
        return null;
    }
  };
  return (
    <div className="pt-4 px-2 md:p-8 h-full">
    {!details ? <section className="p-5">
      {!details && <h2 className="font-semibold mt-4 md:mt-0 mb-4 text-lg md:text-xl">Orders</h2>}
      {!details &&
      <ul className="flex gap-2 mb-5">
        <li className={`${orderStatus === '' ? 'bg-blue-50' : 'bg-transparent'} px-4 cursor-pointer py-1 rounded-full`} onClick={()=>setOrderStatus('')}>All orders</li>
        <li className={`${orderStatus === 'Pending' ? 'bg-blue-50 text-yellow-500' : 'bg-transparent'} px-4 cursor-pointer py-1 rounded-full`} onClick={()=>setOrderStatus('Pending')}>Pending</li>
        <li className={`${orderStatus === 'Active' ? 'bg-blue-50 text-blue-600' : 'bg-transparent'} px-4 cursor-pointer py-1 rounded-full`} onClick={()=>setOrderStatus('Active')}>Active</li>
        <li className={`${orderStatus === 'Completed' ? 'bg-blue-50 text-green-600' : 'bg-transparent'} px-4 cursor-pointer py-1 rounded-full`} onClick={()=>setOrderStatus('Completed')}>Completed</li>
        <li className={`${orderStatus === 'Declined' ? 'bg-blue-50 text-red-600' : 'bg-transparent'} px-4 cursor-pointer py-1 rounded-full`} onClick={()=>setOrderStatus('Declined')}>Declined</li>
      </ul>
      }
      {!details && <div>
        {isLoadingOrders ? (
          <SupplierLoadingSpinner />
        ) : orders && filteredOrders?.length > 0 ? (
          <div className="w-full overflow-auto">
            <table className="w-full min-w-[500px]">
          <thead>
            <tr className="font-semibold">
              <td className='text-center'>#</td>
              <td>Ordered by</td>
              <td>Item</td>
              <td>Order reference</td>
              <td>Order status</td>
              <td className="text-center">Details</td>
            </tr>
          </thead>
          <tbody>
            {filteredOrders?.map((order,index)=>(
              <tr key={order.slug} className="text-[#505050]">
              <td className="text-center">{index + 1}</td>
              <td>{order?.company_info?.name}</td>
              <td>{order?.shell_equipment_info?.product_name}</td>
              <td className="text-sm">{order?.reference}</td>
              <td>
                <span className={`text-white block w-full ${order?.status === 'Active' ? 'bg-blue-600' : order?.status === 'Declined' ? 'bg-red-600' : order?.status === 'Completed' ? 'bg-green-600' : 'bg-yellow-400' } px-6 py-1 text-center rounded-md`}>
                {order?.status}
                </span>
              </td>
              <td className="text-center">
                <button onClick={()=>setDetails(order)}>
                <SquareArrowOutUpRight size={16} />
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        </div>
        ) : (
          <p className="text-center text-bg-warning rounded p-2">
            {`There are no ${orderStatus} orders`}
          </p>
        )}
      </div>}
    </section>
    :
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg md:text-xl font-semibold">Order Details</h2>
            <button onClick={()=>setDetails(null)}>
            <SquareX />
            </button>
          </div>
          <section className='border rounded-md mt-5 p-5'>
            <p className="font-semibold">Order ID: <span className="text-sm">{details?.reference}</span></p>
            <p className="text-sm">{format(new Date(details?.created_at), 'EEE, MMMM dd, yyyy')}</p>
            <p className="mt-3 text-sm">
              Order Status:<span className={`ml-3 ${details?.status === 'Active' ? 'text-blue-600' : details?.status === 'Declined' ? 'text-red-600' : details?.status === 'Completed' ? 'text-green-600' : 'text-yellow-400' }`}>{details.status}</span>
            </p>
            <div className="mt-5 flex flex-col gap-5">
            <div className="flex gap-4">
              <div className="size-9 rounded-full grid place-content-center bg-slate-100">
              <User size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Customer</span>
                <span className="text-sm text-[#7f7f7f]">Name: <span className="text-black ml-2">{details?.company_info?.name}</span></span>
                <span className="text-sm text-[#7f7f7f]">Email: <span className="text-black ml-2">{details?.company_info?.email}</span></span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="size-9 rounded-full grid place-content-center bg-slate-100">
              <ShoppingCart size={18} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Order Info</span>
                <span className="text-sm text-[#7f7f7f]">Product: <span className="text-black ml-2">{details?.shell_equipment_info?.product_name}</span></span>
                {details?.self_delivery 
                ?
                <span className="text-sm text-[#7f7f7f]">Delivery: <span className="text-black ml-2">Self pickup</span></span>
                :
                <div className="flex flex-col gap-1">
                  <span className="text-sm text-[#7f7f7f]">Destination: <span className="text-black ml-2">{details?.destination}</span></span>
                  <span className="text-sm text-[#7f7f7f]">Expected delivery date: <span className="text-black ml-2">{details?.eta}</span></span>
                  <span className="text-sm text-[#7f7f7f]">Delivery charges: <span className="text-black ml-2">{details?.delivery_charges}</span></span>
                </div>
              }
                <span className="text-sm text-[#7f7f7f]">Quantity: <span className="text-black ml-2">{details?.quantity}</span></span>
                <span className="text-sm text-[#7f7f7f]">Payment type: <span className="text-black ml-2">{details?.paymentType}</span></span>
              </div>
            </div>
            </div>
          </section>
          {/* <section className="border-y p-2 mt-4 space-y-2">
            <div className="text-lg space-y-2">
              <div className="grid grid-cols-2 bg-slate-100 p-2 gap-2">
                <span className="font-semibold">Ordered by</span>
                <span className="">{details?.company_info?.name}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-2">
                <span className="font-semibold">Item</span>
                <span className="">{details?.shell_equipment_info?.product_name}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-2">
                <span className="font-semibold">Order reference</span>
                <span className="">{details?.reference}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-2">
                <span className="font-semibold">Order status</span>
                <span className="">{details?.status}</span>
              </div>
            </div>
            {filteredOrderDetails?.map((item)=>(
              <div key={item[0]} className="grid grid-cols-2 gap-2 bg-slate-100 p-2 text-lg">
                <span className="font-semibold">{formatKey(item[0])}</span>
                <span>{formatKey(String(item[1]))}</span>
              </div>
            ))}
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-2 text-lg">
                <span className="font-semibold">Payment type</span>
                <span>{formatKey(getFormattedKey(details?.paymentType))}</span>
              </div>
          </section> */}
          
        </div>
        }
    </div>
  );
}

export default AllOrders;
