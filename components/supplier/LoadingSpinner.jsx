import React from 'react'

function SupplierLoadingSpinner() {
  return (
    <section className="p-2 mt-3 d-flex justify-content-center align-items-center flex-column">
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </section>
  );
}

export default SupplierLoadingSpinner