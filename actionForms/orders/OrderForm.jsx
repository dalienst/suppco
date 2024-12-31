'use client'

import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { useState } from "react";

function OrderForm({ company, site, supplier, filters}) {
    const [data, setData] = useState({
        company: '',
        site: '', // Use site reference if available
        shell_equipment: '', // Use shell equipment reference
        employees: [], // Not necessarily required
        status: 'Pending',
        orderSpecifications: {}, // Initialize as an empty object
        self_delivery: false,
        quantity: '',
        destination: '',
        eta: '',
        delivery_charges: '',
        paymentType: '',
    });

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
   const handleSubmit = (e) => {
        e.preventDefault();
        const finalData = {
            ...data,
            company:company?.reference,
            site:site?.reference,
            shell_equipment: supplier?.reference,
            delivery_charges: supplier?.delivery_charges,
            orderSpecifications:filters, 
        };

        console.log('Form data submitted:', finalData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="font-semibold text-lg">Order Form</h1>
            <div className="flex flex-col gap-1">
                        <Label htmlFor="quantity">Quantity</Label>
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
              <span className="text-lg underline">Allocate staff</span>
              {site?.employees_details?.map((employee) => (
                    <label key={employee.id}> {/* Assuming each employee has a unique id */}
                        <input
                            type="checkbox"
                            value={employee.email} // Use employee name or id as value
                            checked={data.employees.includes(employee.email)} // Check if employee is selected
                            onChange={handleEmployeeChange}
                        />
                        {employee?.first_name} {employee?.last_name}
                    </label>
                ))}
          </div>
          <span className="font-medium ">Payment Details</span>
          
            <div className="flex flex-col gap-1">
                        <Label htmlFor="self_delivery">Delivery option</Label>
                        <select name="self_delivery" id="" required onChange={(e) => setData({ ...data, self_delivery: e.target.value === 'true' })}>
                            <option value=''>Choose an option</option>
                            <option value={true}>Self pickup</option>
                            <option value={false}>Be delivered</option>
                        </select>
                      </div>
            <div className="flex flex-col gap-1">
                        <Label htmlFor="destination">Delivery destination</Label>
                        <Input
                        type="text"
                        name="destination"
                        value={data.destination}
                        onChange={handleChange}
                          required
                          className="border rounded-lg p-2"
                        />
                      </div>
            <div className="flex flex-col gap-1">
                        <Label htmlFor="eta">Expected date of Delivery</Label>
                        <Input
                        type="text"
                        name="eta"
                        value={data.eta}
                        onChange={handleChange}
                          required
                          className="border rounded-lg p-2"
                        />
                      </div>
           
            <div>
            <label>
                    Delivery charges
                </label>
                    <output
                        type="text"
                    >{supplier?.delivery_charges}</output>

                <p>Select Payment Type:</p>
                <label>
                    <input
                        type="radio"
                        name="paymentType"
                        value="is_fixed"
                        checked={data.paymentType === 'is_fixed'}
                        onChange={handlePaymentTypeChange}
                    />
                    Is Fixed
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentType"
                        value="is_fixed_fifty"
                        checked={data.paymentType === 'is_fixed_fifty'}
                        onChange={handlePaymentTypeChange}
                    />
                    Is Fixed Fifty
                </label>
                <label>
                    <input
                        type="radio"
                        name="paymentType"
                        value="is_negotiable"
                        checked={data.paymentType === 'is_negotiable'}
                        onChange={handlePaymentTypeChange}
                    />
                    Is Negotiable
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default OrderForm