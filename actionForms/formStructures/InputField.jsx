import { Field } from "formik";
import React from "react";

function InputField({ type, name, placeholder, id }) {
  return (
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      id={id}
      className="form-control"
    />
  );
}

export default InputField;
