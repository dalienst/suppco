"use client";

import useAxiosAuth from "@/hooks/useAxiosAuth";
import useUserId from "@/hooks/useUserId";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/accounts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Sidebar() {
  const axios = useAxiosAuth();
  const userId = useUserId();

  const { isLoading: isLoadingUser, data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUser(userId, axios),
  });
  return (
    <div className="card border-0 h-100 shadow rounded">
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h6 className="card-title fw-bold">Supplier</h6>
          <hr />

          <div className="mb-1 w-100 p-2 supplier-sidebar rounded">
            <Link href="/supplier/dashboard" className="text-decoration-none text-dark">
              <i className="bi bi-speedometer me-2"></i>
              Dashboard
            </Link>
          </div>

          <div className="mb-1 w-100 p-2 supplier-sidebar rounded">
            <Link href="/supplier/company" className="text-decoration-none text-dark">
              <i className="bi bi-buildings me-2"></i>
              Company
            </Link>
          </div>

          <div className="mb-1 w-100 p-2 supplier-sidebar rounded">
            <Link href="/supplier/inventory" className="text-decoration-none text-dark">
              <i className="bi bi-building me-2"></i>
              Inventory
            </Link>
          </div>

          <div className="mb-1 w-100 p-2 supplier-sidebar rounded">
            <Link href="/supplier/orders" className="text-decoration-none text-dark">
              <i className="bi bi-clipboard-data me-2"></i>
              Orders
            </Link>
          </div>

          <div className="mb-1 w-100 p-2 supplier-sidebar rounded">
            <Link href="/supplier/deliveries" className="text-decoration-none text-dark">
              <i className="bi bi-truck me-2"></i>
              Deliveries
            </Link>
          </div>

          <div className="mb-1 w-100 p-2 supplier-sidebar rounded">
            <Link href="/supplier/employees" className="text-decoration-none text-dark">
              <i className="bi bi-people-fill me-2"></i>
              Employees
            </Link>
          </div>

          <div className="mb-1 w-100 p-2 supplier-sidebar rounded">
            <Link
              href="/supplier/settings"
              className="text-decoration-none text-dark"
            >
              <i className="bi bi-gear me-2"></i>
              Settings
            </Link>
          </div>
        </div>
        <div className="text-center">
          {profile?.avatar ? (
            <Image
              src={profile?.avatar}
              alt="logo"
              width={50}
              height={50}
              className="supplier-sidebar-border"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          ) : (
            <Image
              src="/prof.jpg"
              alt="logo"
              width={50}
              height={50}
              className="supplier-sidebar-border"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          )}

          <h5 className="card-title mt-2 mb-1">
            {profile?.first_name === null ? (
              <Link href="/supplier/settings">Update Profile</Link>
            ) : (
              profile?.first_name
            )}
          </h5>
          <p className="card-text" style={{ fontSize: "12px" }}>
            {profile?.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
