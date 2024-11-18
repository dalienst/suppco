"use client";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { getCompanyDetail } from "@/services/companies";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function CompanyNavbar({ slug }) {
  const axios = useAxiosAuth();
  const pathname = usePathname();

  const {
    isLoading: isLoadingCompany,
    data: company,
    refetch: refetchCompany,
  } = useQuery({
    queryKey: ["company"],
    queryFn: () => getCompanyDetail(slug, axios),
  });

  return (
    <>
      <nav className="navbar navbar-expand-md rounded border bg-white">
        <div className="container-fluid">
          <Link href={`/company/${slug}`} className="navbar-brand">
            {company?.logo ? (
              <Image
                src={company?.logo}
                alt="logo"
                className="rounded"
                width={35}
                height={35}
              />
            ) : (
              <Image
                src="/machine.jpg"
                alt="logo"
                className="rounded"
                width={35}
                height={35}
              />
            )}
          </Link>

          <button
            className="navbar-toggler border-0  text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            aria-controls="collapsibleNavbar"
          >
            <i className="bi bi-list text-dark"></i>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item rounded ">
                <Link
                  href={`/company/${slug}`}
                  className={`${
                    pathname === `/company/${slug}`
                      ? "nav-link active text-primary"
                      : "nav-link text-dark"
                  }`}
                >
                  Dashboard
                </Link>
              </li>


              <li className="nav-item rounded ">
                <Link
                  href={`/company/${slug}/inv`}
                  className={`${
                    pathname === `/company/${slug}/inv`
                      ? "nav-link active text-primary"
                      : "nav-link text-dark"
                  }`}
                >
                  Inventory
                </Link>
              </li>

              <li className="nav-item rounded ">
                <Link
                  href={`/company/${slug}/orders`}
                  className={`${
                    pathname === `/company/${slug}/orders`
                      ? "nav-link active text-primary"
                      : "nav-link text-dark"
                  }`}
                >
                  Orders
                </Link>
              </li>

              <li className="nav-item rounded ">
                <Link
                  href={`/company/${slug}/deliveries`}
                  className={`${
                    pathname === `/company/${slug}/deliveries`
                      ? "nav-link active text-primary"
                      : "nav-link text-dark"
                  }`}
                >
                  Deliveries
                </Link>
              </li>

              <li className="nav-item rounded ">
                <Link
                  href={`/company/${slug}/employees`}
                  className={`${
                    pathname === `/company/${slug}/employees`
                      ? "nav-link active text-primary"
                      : "nav-link text-dark"
                  }`}
                >
                  Employees
                </Link>
              </li>

              <li className="nav-item rounded ">
                <Link
                  href={`/company/${slug}/settings`}
                  className={`${
                    pathname === `/company/${slug}/settings`
                      ? "nav-link active text-primary"
                      : "nav-link text-dark"
                  }`}
                >
                  Settings
                </Link>
              </li>

              <li className="nav-item rounded ">
                <Link
                  href={
                    company?.type === "supplier"
                      ? "/supplier/dashboard"
                      : company?.type === "contractor"
                      ? "/contractor/dashboard"
                      : "/company/dashboard"
                  }
                  className="nav-link text-danger"
                >
                  Exit
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CompanyNavbar;
