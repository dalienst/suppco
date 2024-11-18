"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import useUserId from "@/hooks/useUserId";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/accounts";
import { usePathname } from "next/navigation";

function ContractorNavbar() {
  const axios = useAxiosAuth();
  const userId = useUserId();
  const pathname = usePathname();

  const { isLoading: isLoadingUser, data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUser(userId, axios),
  });

  return (
    <nav className="navbar navbar-expand-md rounded shadow rounded contractor-sidebar">
      <div className="container-fluid">
        <Link href="/contractor/dashboard" className="navbar-brand text-white">
          {profile?.first_name === null ? "Contractor" : profile?.first_name}
        </Link>

        <button
          className="navbar-toggler border-0 text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
        >
          <i className="bi bi-three-dots text-white"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item contractor-sidebar-btn rounded">
              <Link
                href="/contractor/dashboard"
                className={`${
                  pathname === "/contractor/dashboard"
                    ? "nav-link active text-secondary"
                    : "nav-link text-white"
                }`}
              >
                Dashboard
              </Link>
            </li>

            {profile?.companies?.name !== null ? (
              <>
                <li className="nav-item contractor-sidebar-btn rounded">
                  <Link
                    href="/contractor/subcontractors"
                    className={`${
                      pathname === "/contractor/subcontractors"
                        ? "nav-link active text-secondary"
                        : "nav-link text-white"
                    }`}
                  >
                    Subcontractors
                  </Link>
                </li>

                <li className="nav-item contractor-sidebar-btn rounded">
                  <Link
                    href="/contractor/employees"
                    className={`${
                      pathname === "/contractor/employees"
                        ? "nav-link active text-secondary"
                        : "nav-link text-white"
                    }`}
                  >
                    Employees
                  </Link>
                </li>
              </>
            ) : null}

            <li className="nav-item contractor-sidebar-btn rounded">
              <Link
                href="/contractor/settings"
                className={`${
                  pathname === "/contractor/settings"
                    ? "nav-link active text-secondary"
                    : "nav-link text-white"
                }`}
              >
                Settings
              </Link>
            </li>

            <li className="nav-item">
              <button
                onClick={() => signOut()}
                className="nav-link text-danger"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ContractorNavbar;
