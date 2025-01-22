"use client";
import React, { useEffect, useState } from "react";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import useUserId from "@/hooks/useUserId";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/accounts";
import Link from "next/link";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import UserTable from "@/components/tables/InfoTable";
import { getOrders } from "@/services/orders";
import useFetchSiteDetail from "@/dataActions/site-equipment/FetchSiteDetail";
import { getSupplierProducts } from "@/services/supplierProducts";
import { ordersColumn } from "@/data/columns";
import { Button } from "@/app/components/ui/button";

function SiteOrders({ params: { slug } }) {
  const axios = useAxiosAuth();
  const userId = useUserId();

  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);

  const { isLoading: isLoadingUser, data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUser(userId, axios),
  });

  const {
    isLoading: isLoadingSite,
    data: site,
    refetch: refetchSite,
  } = useFetchSiteDetail(slug);

  const {
    isLoading: isLoadingOrders,
    data: orders,
    refetch: refetchOrders,
    isSuccess,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(axios),
  });
  console.log(orders)
  const { isLoading: isLoadingsupplierProducts, data: supplierProducts } =
    useQuery({
      queryKey: ["supplierProducts"],
      queryFn: () => getSupplierProducts(axios),
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

  if (isLoadingSite) {
    return <SupplierLoadingSpinner />;
  }

  return (
    <div className="pt-4 px-2 md:p-6">
      <section className="mt-5">
        <div className="flex justify-between my-4">
          <h2 className="font-semibold text-lg">Orders</h2>
          <Button>
            <Link href={`/sites/${slug}/shell`} onClick={() => setOpen(true)}>Create order</Link>
          </Button>
        </div>

          {!open && <div>
            {isLoadingOrders ? (
              <SupplierLoadingSpinner />
            ) : orders && orders.length > 0 ? (
              <UserTable
                rows={rows}
                columns={ordersColumn}
                redirectLink=""
              />
            ) : (
              <p className="text-center text-bg-warning rounded p-2">
                You have no orders yet.
              </p>
            )}
          </div>
        }
      </section>
    </div>
  );
}

export default SiteOrders;
