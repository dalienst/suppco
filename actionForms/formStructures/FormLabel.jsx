import React from "react";

function FormLabel({ name, children }) {
  return (
    <label htmlFor={name} className="form-label fw-semibold">
      {children}
    </label>
  );
}

export default FormLabel;
