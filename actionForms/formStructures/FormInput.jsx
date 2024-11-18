import { Label } from "@/app/components/ui/label";
import { Field } from "formik";

function FormInput({ label, name, type = "text", placeholder, id }) {
  return (
    <div className="flex flex-col gap-1">
      {/* Label */}
      <Label htmlFor={id || name}>
        {label}
      </Label>

      {/* Input Field */}
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        id={id || name}
        className="border p-2 rounded-md"
      />
    </div>
  );
}

export default FormInput;
