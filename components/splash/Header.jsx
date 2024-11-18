"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="container-fluid py-4 px-3 border header-bg rounded-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 col-sm-12 mb-2">
          <h2 className="display-5 text-start fw-semibold mb-3">
            Bridging the gap between contractors and suppliers
          </h2>
          <p className="text-start mb-3">
            Find and compare suppliers and contractors with ease using our web.
            Purchase construction equipment with ease. Create chainlinked orders
            and deliveries from your favourite suppliers.
          </p>

          {session?.user?.is_contractor === true ? (
            <Link
              href="/contractor/dashboard"
              className="btn btn-lg contractor-btn rounded-pill"
            >
              Dashboard
            </Link>
          ) : session?.user?.is_supplier === true ? (
            <Link
              href="/supplier/dashboard"
              className="btn btn-lg supplier-btn rounded-pill"
            >
              Dashboard
            </Link>
          ) : session?.user?.is_superuser === true ? (
            <>
              <Link
                href="/admin"
                className="btn btn-lg supplier-btn rounded-pill"
              >
                Dashboard
              </Link>
            </>
          ) : session?.user?.is_worker === true ? (
            <>
              <Link
                href="/workers/dashboard"
                className="btn btn-lg contractor-btn rounded-pill"
              >
                Dashboard
              </Link>
            </>
          ) : session?.user?.is_employee === true ? (
            <>
              <Link
                href="/employees/dashboard"
                className="btn btn-lg supplier-btn rounded-pill"
              >
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <div className="d-flex justify-content-start align-items-center gap-2 mb-3">
                <Link
                  href="/auth/login"
                  className="btn btn-lg contractor-btn rounded-pill"
                >
                  Get Started
                </Link>
                <Link
                  href="/auth/signup/supplier"
                  className="btn btn-lg supplier-btn rounded-pill"
                >
                  Supplier
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="col-md-6 col-sm-12 mb-2 text-end d-none d-md-block">
          <Image
            src="/machine.jpg"
            width={500}
            height={500}
            alt="logo"
            className="img-fluid rounded-5"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
