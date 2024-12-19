"use client";
import { Field, Form, Formik } from "formik";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { useState } from "react";
import { Input } from "@/app/components/ui/input";

function SupplierInputForm({ onSupplierInputValues }) {
  const supplierInputValues = {
    fixed_terms: "",
    fixed_fifty_terms: "",
    pod_terms: "",
    negotiable_terms:"",
  };
  const [supplierInput, setSupplierInput] = useState({
    delivery_charges:'',
    quantity_available:'',
    rate_per_unit:'',
    deposit_percentage:'',
    delivery_mode:'',
    fixed_terms: "",
    fixed_fifty_terms: "",
    pod_terms: "",
    negotiable_terms:"",
});
const [planType, setPlanType] = useState({
  is_fixed: false,
  is_fixed_fifty: false,
  is_payment_on_delivery: false,
  is_negotiable: false,
});
const [deliveryOffered, setDeliveryOffered] = useState(false);

const handleCheckboxChange = (e) => {
  const { name, checked } = e.target;
  setPlanType(prevState => ({
    ...prevState,
      [name]: checked
  }));
};

  const handleChange = (e) =>{
    setSupplierInput({...supplierInput, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const supplierInputValues = {...supplierInput, offers_delivery:deliveryOffered, ...planType}
    console.log(supplierInputValues)
    // onSupplierInputValues(supplierInputValues);
  }

  return (
    <div>
    <div className="grid grid-cols-1 gap-5 mb-5">
      <div className="border rounded-lg p-4">
      <span className="text-lg font-semibold block mb-4">Delivery Condition</span>
      <div>
      <span>Do you offer delivery</span>
        <div className="flex items-center gap-2">
        <label className="flex items-center gap-1">
          <Input type="radio" name="picked" value="Yes" onClick={()=>setDeliveryOffered(true)}/>
          Yes
        </label>
        <label className="flex items-center gap-1">
          <Input type="radio" name="picked" defaultChecked value="No" onClick={()=>setDeliveryOffered(false)}/>
          No
        </label>
        </div>
      </div>
      {deliveryOffered && 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <div className="flex flex-col gap-1">
        <Label htmlFor="delivery_charges">What are your delivery charges</Label>
        <Input
          type="number"
          required
          id="delivery_charges"
          name="delivery_charges"
          className="border rounded-lg p-2"
          onChange={handleChange}
          value={supplierInput.delivery_charges}
        />
      </div>
      <div className="flex flex-col gap-1">
      <Label htmlFor="delivery_mode">Delivery mode</Label>
      <select
        id="delivery_mode"
        name="delivery_mode"
        className="bg-white border-[1px] p-2 rounded-lg"
        onChange={handleChange}
        value={supplierInput.delivery_mode}
        required
        >
        <option value="distance">
          Charged based on distance (km)
        </option>
        <option value="weight">
          Charged based on weight (kg)
        </option>
      </select>
    </div>
    </div>
      }
      </div>
      <div className="border rounded-lg p-4">
      <span className="text-lg font-semibold block mb-4">Payment Details</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex flex-col gap-1">
        <Label htmlFor="quantity_available">What quantity is available</Label>
        <Input
          type="number"
          required
          id="quantity_available"
          name="quantity_available"
          className="border rounded-lg p-2"
          onChange={handleChange}
          value={supplierInput.quantity_available}
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="rate_per_unit">Rate per unit</Label>
        <Input
          type="number"
          id="rate_per_unit"
          required
          name="rate_per_unit"
          className="border rounded-lg p-2"
          onChange={handleChange}
          value={supplierInput.rate_per_unit}
        />
      </div>
      </div>
      </div>
      <div className="flex flex-col gap-1 border p-4 rounded-lg">
        <span className="text-lg font-semibold block mb-5">Payment Plan Terms</span>
        <div className="grid grid-cols-1 gap-5">
          <div className="border p-2 rounded-lg">
            <span className="font-semibold block mb-3 text-lg ">Upfront Payment</span>
            <label className="flex gap-1 items-center">
              <input
                type="checkbox"
                name="is_fixed"
                checked={planType.is_fixed}
                onChange={handleCheckboxChange}
              />Fixed
            </label>
            <div className="flex flex-col mt-4 gap-1">
            <Label htmlFor="fixed_terms">Terms & Conditions</Label>
            <Input
              type="text"
              required
              id="fixed_terms"
              name="fixed_terms"
              className="border rounded-lg p-2"
              onChange={handleChange}
              value={supplierInput.fixed_terms}
            />
            </div>
          </div>
          <div className="border p-2 rounded-lg">
            <span className="font-semibold block mb-3 text-lg ">50/50 Payment</span>
            <label className="flex gap-1 items-center">
              <input
                type="checkbox"
                name="is_fixed_fifty"
                checked={planType.is_fixed_fifty}
                onChange={handleCheckboxChange}
              />Fixed 50/50
            </label>
            <div className="flex flex-col mt-4 gap-1">
            <Label htmlFor="fixed_fifty_terms">Terms & Conditions</Label>
            <Input
              type="text"
              required
              id="fixed_fifty_terms"
              name="fixed_fifty_terms"
              className="border rounded-lg p-2"
              onChange={handleChange}
              value={supplierInput.fixed_fifty_terms}
            />
            </div>
          </div>
          <div className="border p-2 rounded-lg">
          <span className="font-semibold block mb-3 text-lg ">Payment on Delivery</span>
            <label className="flex gap-1 items-center">
              <input
                type="checkbox"
                name="is_payment_on_delivery"
                checked={planType.is_payment_on_delivery}
                onChange={handleCheckboxChange}
              />Payment on Delivery
            </label>
            <div className="flex flex-col mt-4 gap-1">
            <Label htmlFor="pod_terms">Terms & Conditions</Label>
            <Input
              type="text"
              required
              id="pod_terms"
              name="pod_terms"
              className="border rounded-lg p-2"
              onChange={handleChange}
              value={supplierInput.pod_terms}
            />
            </div>
          </div>
          <div className="border p-2 rounded-lg">
            <span className="font-semibold block mb-3 text-lg ">Negotiable</span>
            <label className="flex gap-1 items-center">
              <input
                type="checkbox"
                name="is_negotiable"
                checked={planType.is_negotiable}
                onChange={handleCheckboxChange}
              />Negotiable
            </label>
            <div className="flex flex-col mt-4 gap-1">
            <Label htmlFor="deposit_percentage">Deposit percentage</Label>
            <Input
              type="number"
              required
              id="deposit_percentage"
              name="deposit_percentage"
              className="border rounded-lg p-2"
              value={supplierInput.deposit_percentage}
              onChange={handleChange}
            />
            </div>
            <div className="flex flex-col mt-4 gap-1">
            <Label htmlFor="negotiable_terms">Terms & Conditions</Label>
            <Input
              type="text"
              required
              id="negotiable_terms"
              name="negotiable_terms"
              className="border rounded-lg p-2"
              onChange={handleChange}
              value={supplierInput.negotiable_terms}
            />
            </div>
          </div>
        </div>
      </div>
      
    </div>
      <Button className='w-fit' type="button" onClick={handleSubmit}>Save</Button>
    </div>
  );
}

export default SupplierInputForm;
