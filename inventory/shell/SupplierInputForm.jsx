"use client";
import { Field, Form, Formik } from "formik";
import { Label } from "@/app/components/ui/label";
import { Button } from "@/app/components/ui/button";
import { useState } from "react";
import { Input } from "@/app/components/ui/input";

function SupplierInputForm({ onSupplierInputValues }) {
  const [supplierInput, setSupplierInput] = useState({
    delivery_charges:'',
    quantity_available:'',
    rate_per_unit:'',
    plan_type:'fixed',
    deposit_percentage:'',
    delivery_mode:''
});
const [deliveryOffered, setDeliveryOffered] = useState(false);

  const handleChange = (e) =>{
    setSupplierInput({...supplierInput, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const supplierInputValues = {...supplierInput, offers_delivery:deliveryOffered}
    onSupplierInputValues(supplierInputValues);
  }

  return (
    <div>
    <div className="grid grid-cols-2 gap-5 mb-5">
      <div role="group" aria-labelledby="my-radio-group" className=''>
      <label id="my-radio-group">Do you offer delivery</label>
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
      {deliveryOffered && <div className="flex flex-col gap-1">
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
      </div>}
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
      <div className="flex flex-col gap-1">
        <Label htmlFor="plan_type">Payment plan type</Label>
        <select
          id="plan_type"
          name="plan_type"
          className="bg-white border-[1px] p-2 rounded-lg"
          onChange={handleChange}
          value={supplierInput.plan_type}
          required
          >
          <option value="fixed">
            Fixed
          </option>
          <option value="fixed_50_50">
            Fixed_50_50
          </option>
          <option value="payment_on_delivery">
            Payment on Delivery
          </option>
          <option value="negotiable">
            Negotiable
          </option>
        </select>
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
      <div className="flex flex-col gap-1">
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
    </div>
      <Button className='w-fit' type="button" onClick={handleSubmit}>Save</Button>
    </div>
  );
}

export default SupplierInputForm;
