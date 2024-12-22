"use client";

import { useFetchOrderDetail } from "@/dataActions/orders/ordersActions";

function EmployeeDetail({ params: { orderSlug } }) {
  const {
    isLoading: isLoadingOrder,
    data: order,
    refetch: refetchWorker,
  } = useFetchOrderDetail(orderSlug);
console.log(order)
  if (isLoadingOrder) {
    return (
      <section
        className="p-2 mt-3 d-flex justify-content-center align-items-center flex-column"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }

  return (
          <div className="p-4">
            <h1 className="text-lg font-semibold">Order Details</h1>
            
          </div>
  );
}

export default EmployeeDetail;
