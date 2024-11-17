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
    <div className="card border-0 shadow rounded h-100 contractor-sidebar">
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-center text-white fw-bold">SUPPCO</h5>
          <hr className="contractor-hr" />

          <div className="mb-1 w-100 p-2 contractor-sidebar-btn rounded">
            <Link
              href="/contractor/dashboard"
              className="text-decoration-none text-white"
            >
              <i className="bi bi-speedometer me-2"></i>
              Dashboard
            </Link>
          </div>

          <div className="mb-1 w-100 p-2 contractor-sidebar-btn rounded">
            <Link
              href="/contractor/sites"
              className="text-decoration-none text-white"
            >
              <i className="bi bi-buildings me-2"></i>
              Sites
            </Link>
          </div>

          <div className="mb-1 w-100 p-2 contractor-sidebar-btn rounded">
            <Link
              href="/contractor/inventory"
              className="text-decoration-none text-white"
            >
              <i className="bi bi-building me-2"></i>
              Inventory
            </Link>
          </div>

          <div className="mb-1 w-100 p-2 contractor-sidebar-btn rounded">
            <Link
              href="/contractor/orders"
              className="text-decoration-none text-white"
            >
              <i className="bi bi-clipboard-data me-2"></i>
              Orders
            </Link>
          </div>

          <div className="mb-1 w-100 p-2 contractor-sidebar-btn rounded">
            <Link
              href="/contractor/deliveries"
              className="text-decoration-none text-white"
            >
              <i className="bi bi-truck me-2"></i>
              Deliveries
            </Link>
          </div>

          <div className="mb-1 w-100 p-2 contractor-sidebar-btn rounded">
            <Link
              href="/contractor/employees"
              className="text-decoration-none text-white"
            >
              <i className="bi bi-people-fill me-2"></i>
              Employees
            </Link>
          </div>

          <div className="mb-1 w-100 p-2 contractor-sidebar-btn rounded">
            <Link
              href="/contractor/settings"
              className="text-decoration-none text-white"
            >
              <i className="bi bi-gear me-2"></i>
              Settings
            </Link>
          </div>
        </div>

        <div className="d-flex gap-3 align-items-center">
          {profile?.avatar ? (
            <Image
              src={profile?.avatar}
              alt="logo"
              width={40}
              height={40}
              className="supplier-sidebar-border"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          ) : (
            <Image
              src="/prof.jpg"
              alt="logo"
              width={40}
              height={40}
              className="supplier-sidebar-border"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          )}

          <div>
            <h5 className="card-title text-white">
              {profile?.first_name === null ? (
                <Link href="#">Update Profile</Link>
              ) : (
                profile?.first_name
              )}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
