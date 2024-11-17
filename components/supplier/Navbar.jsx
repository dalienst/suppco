"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import useUserId from "@/hooks/useUserId";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/accounts";
import { usePathname } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { LogOut } from "lucide-react";

function Navbar() {
  const axios = useAxiosAuth();
  const userId = useUserId();
  const pathname = usePathname();

  const { isLoading: isLoadingUser, data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUser(userId, axios),
  });

  return (
    <nav className="px-4">
      <h1 className="font-bold">SUPPCO</h1>
      <div className="flex justify-between px-8 mt-2 shadow py-5 rounded-lg">
        <Link href="/supplier/dashboard" className="text-2xl font-semibold">
          {profile?.first_name === null ? "Dashboard" : profile?.first_name}
        </Link>

        <ul className="flex gap-4 items-center">
          <li className="nav-item supplier-sidebar rounded">
            <Link
              href="/supplier/dashboard"
              className={`${
                pathname === "/supplier/dashboard"
                  ? "nav-link active text-success"
                  : "nav-link text-dark"
              }`}
            >
              Dashboard
            </Link>
          </li>

          {profile?.companies?.name !== null ? (
            <>
              <li className="nav-item supplier-sidebar rounded">
                <Link
                  href="/supplier/employees"
                  className={`${
                    pathname === "/supplier/employees"
                      ? "nav-link active text-success"
                      : "nav-link text-dark"
                  }`}
                >
                  Employees
                </Link>
              </li>
            </>
          ) : null}

          {profile?.companies?.name !== null ? (
            <li className="nav-item supplier-sidebar rounded">
              <Link
                href="/supplier/settings"
                className={`${
                  pathname === "/supplier/settings"
                    ? "nav-link active text-success"
                    : "nav-link text-dark"
                }`}
              >
                Settings
              </Link>
            </li>
          ) : (
            <div className="relative w-fit">
              <Link
                href="/supplier/settings"
                className="relative border border-blue-200 w-fit px-5 py-1 bg-blue-50 rounded"
              >
                Settings
                <span className="absolute top-[-7px] right-[-5px]">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-300"></span>
                  </span>
                </span>
              </Link>
              {!pathname.includes('settings') && <p className="absolute right-0 w-[300px] bg-blue-50 top-[60px] p-5 rounded-b-3xl animate-bounce rounded-tl-3xl">
                Quickly setup your account here to continue
              </p>}
            </div>
          )}

          <li className="ml-5">
            <Button onClick={() => signOut()} variant='outline' className="">
            <LogOut color="#000000" />
              Log Out
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
