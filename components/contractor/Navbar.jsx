"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import useUserId from "@/hooks/useUserId";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/accounts";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BookOpen, Boxes, CircleUser, FileBox, Landmark, LayoutDashboard, LogOut, Menu, Package, Settings, Truck, Users } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";

function ContractorNavbar() {
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
        <div className="mb-5">
          <div>
            {profile?.avatar ? (
              <div>
                <Image
                src={profile?.avatar}
                alt="logo"
                width={70}
                height={70}
                className="rounded-full h-[70px] w-[70px] object-cover"
              />
              </div>
            ) : (
              <CircleUser
                strokeWidth={1}
                className="size-[70px] text-[#b0b0b0]"
              />
            )}
          </div>
          <Link href="/contractor/dashboard" className="text-2xl font-semibold">
            {profile?.first_name === null ? "Contractor" : profile?.first_name}
          </Link>
        </div>
        <ul className="flex flex-col gap-6">
          <li className="nav-item rounded">
            <Link
              href="/contractor/dashboard"
              className="flex items-center gap-1"
            >
              <LayoutDashboard />
              Dashboard
            </Link>
          </li>
          <li className="nav-item rounded">
            <Link
              href="/contractor/sites"
              className="flex items-center gap-1"
            >
              <Landmark />
              Sites
            </Link>
          </li>
          {/* <li className="nav-item rounded">
            <Link
              href="/contractor/inventory"
              className="flex items-center gap-1"
            >
              <Boxes />
              Inventory
            </Link>
          </li> */}
          <li className="nav-item rounded">
            <Link
              href="/contractor/orders"
              className="flex items-center gap-1"
            >
              <Package />
              Orders
            </Link>
          </li>
          {/* <li className="nav-item rounded">
            <Link
              href="/contractor/delivery"
              className="flex items-center gap-1"
            >
              <Truck />
              Delivery
            </Link>
          </li> */}
          {/* <li className="nav-item rounded">
            <Link
              href="/contractor/books"
              className="flex items-center gap-1"
            >
              <BookOpen />
              Books
            </Link>
          </li> */}

          {profile?.companies?.name !== null ? (
              <>
                <li className="nav-item rounded">
              <Link
                href="/contractor/subcontractors"
                className="flex items-center gap-1"
              >
                <Users />
                Subcontractors
              </Link>
            </li>

                <li className="nav-item rounded">
              <Link
                href="/contractor/employees"
                className="flex items-center gap-1"
              >
                <Users />
                Employees
              </Link>
            </li>
              </>
            ) : null}
            <li className="nav-item rounded">
              <Link
                href="/contractor/settings"
                className="flex items-center gap-1"
              >
                <Settings />
                Settings
              </Link>
            </li>
        </ul>
      </div>
      <Button onClick={() => signOut()} variant="outline" className="">
        <LogOut color="#000000" />
        Log Out
      </Button>
    </div>
  );

  return (
    <nav className="p-4 h-[100vh]">
    <div className="md:hidden fixed my-4">
      <Sheet>
        <SheetTrigger asChild className="ml-2">
          <Button variant="ghost" className="mt-[2px">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 pl-4 pr-10 h-full">
          {SidebarComponent}
        </SheetContent>
      </Sheet>
    </div>
    <div className="hidden md:block h-full">{SidebarComponent}</div>
  </nav>
  );
}

export default ContractorNavbar;
