'use client'

import { Button } from "@/app/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

function Update({initialValues, onUpdate, loading}) {
    const initialObject = Object.fromEntries(initialValues);
  const [values, setValues] = useState(initialObject);
  
    const formatKey = (key) => {
        return key
          .replace(/_/g, " ")
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(" ");
      };
      const handleChange = (key) => (event) => {
        setValues({
          ...values,
          [key]: event.target.value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        onUpdate(Object.entries(values));
      };
  return (
    <form onSubmit={handleSubmit} className="overflow-auto">
        <ul className="border rounded-xl p-3 my-3 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-3">
        {Object.entries(values).map(([key, value]) => {
            return(
          <li key={key} className="flex flex-col">
            <label className="font-medium" htmlFor={key}>
              {formatKey(key)}
            </label>
            <input
              id={key}
              type="text"
              value={value}
              onChange={handleChange(key)}
              className="border rounded-lg p-2 text-sm text-[#696969]"
            />
          </li>)
        })}
      </ul>
      <Button type="submit" disabled={loading}>
        {
            loading ? <Loader2 className="animate-spin" /> : 'Update Product'
        }
      </Button>
      </form>
  )
}

export default Update