import { Label } from "@/app/components/ui/label";
import { Field } from "formik";

function FormGenerator({type, inputType, options, name, label, placeholder}) {
    switch (inputType) {
        case 'input':
            return(
                <Label className="flex flex-col gap-2 "
                htmlFor={`input-${label}`}
                >
                    {label && label}
                    <Field
                        id={`input-${label}`}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        className="bg-transparent border p-2 rounded-lg border-gray-300 text-gray-300"
                    />
                </Label>
            )
            
        case 'select':
            return(
                <Label className="flex flex-col gap-2 "
                htmlFor={`select-${label}`}
                >
                    {label && label}
                    <Field 
                    as='select'
                        id={`select-${label}`}
                        name={name}
                        className="bg-white border-[1px] p-2 rounded-lg"
                    >
                        {options?.length && options.map((option) => (
                            <option key={option.id} value={option.value} id={option.id}
                            className=""
                            >{option.value}</option>
                        ))}
                    </Field>
                </Label>
            )
            
        case 'textarea':
            return(
                <Label className="flex flex-col gap-2 "
                htmlFor={`textarea-${label}`}
                >
                    {label && label}
                    <Field
                    as='textarea'
                        id={`textarea-${label}`}
                        rows={5}
                        name={name}
                        placeholder={placeholder}
                        className="bg-transparent border p-2 rounded-lg border-gray-300 text-gray-300"
                    />
                </Label>
            )
        default:
            break;    
    }
}

export default FormGenerator
