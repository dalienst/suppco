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
import { CircleUser, LayoutDashboard, LogOut, Menu, Settings, Users } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet"
import Image from "next/image";


function Navbar() {
  const axios = useAxiosAuth();
  const userId = useUserId();
  const pathname = usePathname();

  const { isLoading: isLoadingUser, data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUser(userId, axios),
  });
  const SidebarComponent = (
    <div>
      <div className="flex h-[85vh] flex-col pt-8 rounded-lg">
        <div>
        <div>
                        {profile?.avatar ? (
                          <Image
                            src={profile?.avatar}
                            alt="logo"
                            width={60}
                            height={60}
                            className="rounded-full"
                          />
                        ) : (
                          <CircleUser
                            strokeWidth={1}
                            className="size-[50px] text-[#b0b0b0]"
                          />
                        )}
                      </div>
        <Link href="/supplier/dashboard" className="text-2xl font-semibold">
          {profile?.first_name === null ? "Dashboard" : profile?.first_name}
        </Link>
        </div>
        <ul className="mt-5 flex flex-col gap-8">
          <li className="nav-item supplier-sidebar rounded">
            <Link
              href="/supplier/dashboard"
              className='flex items-center gap-1'
            >
              <LayoutDashboard />
              Dashboard
            </Link>
          </li>

          {profile?.companies?.name !== null ? (
              <li className="nav-item supplier-sidebar rounded">
                <Link
                  href="/supplier/employees"
                  className='flex items-center gap-1'
                >
                  <Users />
                  Employees
                </Link>
              </li>
          ) : null}

          {profile?.companies?.name !== null ? (
            <li className="nav-item supplier-sidebar rounded">
              <Link
                href="/supplier/settings"
                className='flex items-center gap-1'
              >
                <Settings />
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
        </ul>
      </div>
            <Button onClick={() => signOut()} variant='outline' className="">
            <LogOut color="#000000" />
              Log Out
            </Button>
    </div>
  )

  return (
    <nav className="p-4 h-[100vh]">
      <div className="md:hidden fixed my-4">
      <Sheet>
        <SheetTrigger asChild className="ml-2">
          <Button variant="ghost" className="mt-[2px]"><Menu/></Button>
        </SheetTrigger>
        <SheetContent side='left' className="p-0 pl-4 pr-10 w-fit h-full">
          {SidebarComponent}
        </SheetContent>
      </Sheet>
      </div>
      <div className="hidden md:block h-full">
        {SidebarComponent}
      </div>
    </nav>
  );
}

export default Navbar;
