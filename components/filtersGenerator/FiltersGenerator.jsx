'use client'

import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";

function FiltersGenerator({type, value, handleFilterChange, inputType, options, name, label, placeholder}) {
    
    switch (inputType) {
        case 'input':
            return(
                <Label className="flex flex-col gap-2 mb-2"
                htmlFor={`input-${label}`}
                >
                    {label && label}
                    <Input
                        id={`input-${label}`}
                        name={name}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        onChange={(e)=>handleFilterChange(name, e.target.value)}
                        className="bg-transparent border p-2 rounded-lg border-gray-300 text-gray-300"
                    />
                </Label>
            )
            
        case 'select':
            return(
                <Label className="flex flex-col gap-2 mb-2"
                htmlFor={`select-${label}`}
                >
                    {label && label}
                    <select 
                        id={`select-${label}`}
                        name={name}
                        value={value}
                        onChange={(e)=>handleFilterChange(name, e.target.value)}
                        className="bg-white border-[1px] p-2 rounded-lg"
                    >
                        <option value=''>N/A</option>
                        {options?.length && options.map((option) => (
                            <option key={option.id} value={option.value} id={option.id}
                            className=""
                            >{option.value}</option>
                        ))}
                    </select>
                </Label>
            )
            
        case 'textarea':
            return(
                <Label className="flex flex-col gap-2 mb-2"
                htmlFor={`textarea-${label}`}
                >
                    {label && label}
                    <Textarea
                        id={`textarea-${label}`}
                        rows={5}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={(e)=>handleFilterChange(name, e.target.value)}
                        className="bg-transparent border p-2 rounded-lg border-gray-300 text-gray-300"
                    />
                </Label>
            )
        default:
            break;    
    }
}

export default FiltersGenerator
