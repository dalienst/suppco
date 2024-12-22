"use client";
import React, { useEffect, useState } from "react";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import useUserId from "@/hooks/useUserId";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/accounts";
import Link from "next/link";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import Image from "next/image";
import { getBranches } from "@/services/branches";
import AddBranch from "@/actionForms/branches/AddBranch";
import BranchTable from "@/components/supplier/BranchTable";
import UserTable from "@/components/tables/InfoTable";
import { companyBranchesColumn } from "@/data/columns";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { getOrders } from "@/services/orders";
import CreateOrder from "@/actionForms/orders/CreateOrder";
import useFetchSiteDetail from "@/dataActions/site-equipment/FetchSiteDetail";
import { getSupplierProducts } from "@/services/supplierProducts";

function SiteOrders({params:{slug}}) {
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

  const {
    isLoading: isLoadingsupplierProducts,
    data: supplierProducts,
  } = useQuery({
    queryKey: ["supplierProducts"],
    queryFn: () => getSupplierProducts(axios),
  });
console.log(supplierProducts,'supplierProducts')
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
            site orders
          <section className="mt-5">
            <hr />
            <div className="flex justify-between my-4">
              <h2 className="font-semibold text-lg">Your Site&apos;s Orders</h2>
              <div>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className='text-blue900 bg-blue-50 border-blue-200'>+ Create Order</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Create an order</DialogTitle>
                    </DialogHeader>
                    {profile?.companies && (
                      <CreateOrder
                        site={site}
                        company={profile?.companies}
                        onOpenChange={setOpen}
                      />
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="">
              {isLoadingOrders ? (
                <SupplierLoadingSpinner />
              ) : orders && orders.length > 0 ? (
                  <UserTable rows={rows} columns={companyBranchesColumn} redirectLink='' />
              ) : (
                <p className="text-center text-bg-warning rounded p-2">
                  You have no orders yet.
                </p>
              )}
            </div>
          </section>
        </div>
  );
}

export default SiteOrders;
