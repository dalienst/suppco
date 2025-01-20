"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import useUserId from "@/hooks/useUserId";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/accounts";
import { usePathname } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import {
  ChevronLeft,
  CircleUser,
  LayoutDashboard,
  LogOut,
  Menu,
  Package,
  Settings,
  Users,
} from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import Image from "next/image";
import { useFetchBranchDetail } from "@/dataActions/branches/branchesActions";

function Navbar() {
  const axios = useAxiosAuth();
  const userId = useUserId();
  const pathname = usePathname();
  const slug = pathname.split("/")[2];
  const {
    isLoading: isLoadingBranch,
    data: branch,
    refetch: refetchBranch,
  } = useFetchBranchDetail(slug);

  const SidebarComponent = (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col pt-8 rounded-lg">
        <div>
          <div className="flex flex-col mb-5">
            <span className="text-xl font-semibold">{branch?.name}</span>
            <span className="text-[#707070] text-sm">
              {branch?.location} Branch
            </span>
          </div>
        </div>
        <ul className="mt-5 flex flex-col gap-8">
          <li className="rounded">
            <Link href={`/branch/${slug}`} className="flex items-center gap-1">
              <LayoutDashboard />
              Dashboard
            </Link>
          </li>

          {branch?.name !== null ? (
            <li className="rounded">
              <Link
                href={`/branch/${slug}/employees`}
                className="flex items-center gap-1"
              >
                <Users />
                Employees
              </Link>
            </li>
          ) : null}

          {branch?.name !== null ? (
            <li className="rounded">
              <Link
                href={`/branch/${slug}/orders/${branch?.id}`}
                className="flex items-center gap-1"
              >
                 <Package />
                Orders
              </Link>
            </li>
          ) : null}

          {branch?.name !== null ? (
            <li className="rounded">
              <Link
                href={`/branch/${slug}/settings`}
                className="flex items-center gap-1"
              >
                <Settings />
                Settings
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
      <Link href="/supplier/dashboard" className="mb-5">
        <Button className="flex items-center gap-2" variant="outline">
          <ChevronLeft />
          Back to Dashboard
        </Button>
      </Link>
    </div>
  );

  return (
    <nav className="p-4 h-[100vh]">
      <div className="md:hidden fixed my-4">
        <Sheet>
          <SheetTrigger asChild className="ml-2">
            <Button variant="ghost" className="mt-[2px]">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 pl-4 pr-10 w-fit h-full">
            {SidebarComponent}
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:block h-full">{SidebarComponent}</div>
    </nav>
  );
}

export default Navbar;
