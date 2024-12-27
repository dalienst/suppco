"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import UserTable from "@/components/tables/InfoTable";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getUser } from "@/services/accounts";
import { companyBranchesColumn, ordersColumn } from "@/data/columns";
import { getOrders } from "@/services/orders";

function AllOrders() {
  const axios = useAxiosAuth();
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);

  const { isLoading: isLoadingUser, data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUser(userId, axios),
  });

  const {
    isLoading: isLoadingOrders,
    data: orders,
    refetch: refetchOrders,
    isSuccess,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(axios),
  });

  useEffect(() => {
    if (isSuccess) {
      const rows = orders?.map((obj) => {
        return {
          ...obj,
          id: obj.slug,
        };
      });
      setRows(rows);
    }
  }, [orders, isSuccess]);

  if (isLoadingOrders) return <SupplierLoadingSpinner />;
  
  return (
    <section className="p-5">
      <h2 className="font-semibold text-lg">Your Company&apos;s Orders</h2>
      <div className="">
        {isLoadingOrders ? (
          <SupplierLoadingSpinner />
        ) : orders && orders.length > 0 ? (
          <UserTable
            rows={rows}
            columns={ordersColumn}
            redirectLink="contractor/orders/"
          />
        ) : (
          <p className="text-center text-bg-warning rounded p-2">
            There are no orders yet.
          </p>
        )}
      </div>
    </section>
  );
}

export default AllOrders;
