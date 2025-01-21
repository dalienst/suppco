"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { createOrder } from "@/services/orders";
import { ChevronDown, Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

function OrderForm({ company, site, supplier, filters, onClose, onRedirect }) {
  const [data, setData] = useState({
    company: "",
    site: "",
    shell_equipment: "",
    employees: [],
    status: "Pending",
    orderSpecifications: {},
    self_delivery: false,
    quantity: "",
    destination: "",
    eta: "",
    delivery_charges: "",
    paymentType: "",
  });
 
  const [showEmployees, setShowEmployees] = useState(false);
  const [loading, setLoading] = useState(false);
  const axios = useAxiosAuth();
  const myEmployees = [
    {id: 1, name: 'Tony', email:'tony@gmail.com'},
    {id: 2, name: 'Tracy', email:'tracy@gmail.com'},
    {id: 3, name: 'Peter', email:'peter@gmail.com'},
  ]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handlePaymentTypeChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleEmployeeChange = (e) => {
    const { value, checked } = e.target;
    setData((prevData) => {
      const newEmployees = checked
        ? [...prevData.employees, value]
        : prevData.employees.filter((employee) => employee !== value);
      return { ...prevData, employees: newEmployees };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    const jsonSpecifications = JSON.stringify(filters);
    const formData = new FormData();
    data.employees.forEach(email => {
      formData.append('employees[]', email); // Use 'employees[]' to indicate an array
  });
    const finalData = {
      ...data,
      company: company?.reference,
      site: site?.reference,
      employees:formData,
      shell_equipment: supplier?.reference,
      delivery_charges: supplier?.delivery_charges,
      orderSpecifications: jsonSpecifications,
    };
    console.log(finalData)
    try {
      await createOrder(finalData, axios);
      toast.success("Order created successfully.");
      onClose();
      onRedirect();
    } catch (error) {
      toast.error("Failed to create order");
      console.log(error)
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="p-3">
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl mb-2">Order Form</h1>
        <button
          onClick={onClose}
          className="border border-black rounded-lg grid place-content-center size-8"
        >
          x
        </button>
      </div>
      <hr />
      <div className="flex gap-5 my-3 items-center">
        <div className="flex flex-col gap-1">
          <Label htmlFor="quantity" className="text-base font-normal">
            Quantity
          </Label>
          <Input
            type="text"
            name="quantity"
            value={data.quantity}
            onChange={handleChange}
            required
            className="border rounded-lg p-2"
          />
        </div>
        <div>
            <span className="block">Allocate staff</span>
        <div className="relative px-2 py-1.5 rounded-lg border w-[250px]">
          <button type='button' onClick={()=>setShowEmployees(prev=>!prev)} className="flex items-center gap-2">Choose employee <ChevronDown size={16}/></button>
          {showEmployees && <div className="absolute shadow-md bg-white z-50 w-[250px] left-0 px-2 top-10">
          {myEmployees?.map((employee) => (
              <div key={employee.id} className="pb-2">
                <input
                type="checkbox"
                value={employee.email}
                checked={data.employees.includes(employee.email)}
                onChange={handleEmployeeChange}
                className="mr-1"
              />
            <label>
              {employee?.name} 
            </label>
              </div>
          ))}
          
            </div>}
        </div>
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-base font-normal" htmlFor="employees">
            Allocate staff
          </Label>
          <select
            name="employees"
            className="border rounded-lg p-2 bg-white"
            id=""
            onChange={(e) => setData({ ...data, employees: e.target.value })}
          >
            <option value="">Choose employee</option>
            {site?.employees_details?.map((employee) => (
              <option value={employee.email} key={employee.id}>
                {employee?.first_name} {employee?.last_name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <span className="font-medium block text-lg">Delivery Details</span>
      <div className="border rounded-xl p-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
        <div className="flex flex-col gap-1">
          <Label className="text-base font-normal" htmlFor="self_delivery">
            Delivery option
          </Label>
          <select
            name="self_delivery"
            id=""
            className="border rounded-lg p-2 bg-white"
            required
            onChange={(e) =>
              setData({ ...data, self_delivery: e.target.value === "true" })
            }
          >
            <option value="">Choose an option</option>
            <option value={true}>Self pickup</option>
            <option value={false}>Be delivered</option>
          </select>
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-base font-normal" htmlFor="destination">
            Delivery destination
          </Label>
          <Input
            type="text"
            name="destination"
            value={data.destination}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label className="text-base font-normal" htmlFor="eta">
            Expected date of Delivery
          </Label>
          <Input
            type="date"
            name="eta"
            value={data.eta}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
        </div>
      </div>
      <span className="font-medium block text-lg mt-3">Payment Details</span>
      <div className="border rounded-xl p-2 grid grid-cols-1 sm:grid-cols-2">
        <span className="">
          <span>Delivery charges</span>
          <span className="block text-sm text-[#696969]">
            {supplier?.delivery_charges}
          </span>
        </span>
        <div>
          <p>Select Payment Type:</p>
          <div className="flex flex-wrap gap-2 lg:gap-5">
            <label>
              <input
                type="radio"
                name="paymentType"
                value="is_fixed"
                className="mr-1"
                checked={data.paymentType === "is_fixed"}
                onChange={handlePaymentTypeChange}
              />
              Is Fixed
            </label>
            <label>
              <input
                type="radio"
                name="paymentType"
                value="is_fixed_fifty"
                className="mr-1"
                checked={data.paymentType === "is_fixed_fifty"}
                onChange={handlePaymentTypeChange}
              />
              Is Fixed Fifty
            </label>
            <label>
              <input
                type="radio"
                name="paymentType"
                value="is_negotiable"
                className="mr-1"
                checked={data.paymentType === "is_negotiable"}
                onChange={handlePaymentTypeChange}
              />
              Is Negotiable
            </label>
          </div>
        </div>
      </div>
      <Button disabled={loading} className="mt-5" type="submit">
        {loading ? <Loader2 className="animate-spin" /> : "Create order"}
      </Button>
    </form>
  );
}

export default OrderForm;
