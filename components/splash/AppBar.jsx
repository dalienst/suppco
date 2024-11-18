"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";


function AppBar() {
  const { data: session } = useSession();
  return (
    <nav className="d-flex align-items-center px-3 mb-3 appbar-bg rounded-5 py-2 justify-content-between">
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={50}
          objectFit="cover"
          className="img-fluid"
        />
      </div>

      {session?.user?.is_contractor === true ? (
        <Link
          href="/contractor/dashboard"
          className="btn btn-sm contractor-btn rounded-pill"
        >
          Dashboard
        </Link>
      ) : session?.user?.is_supplier === true ? (
        <Link
          href="/supplier/dashboard"
          className="btn btn-sm supplier-btn rounded-pill"
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
      ) : (
        <Link
          href="/auth/login"
          className="btn btn-sm contractor-btn rounded-pill"
        >
          Get Started
        </Link>
      )}
    </nav>
  );
}

export default AppBar;
