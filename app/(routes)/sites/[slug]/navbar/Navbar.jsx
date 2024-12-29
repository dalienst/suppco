"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import {
  ChevronLeft,
  LayoutDashboard,
  Menu,
  Package,
  Settings,
  Users,
} from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import useFetchSiteDetail from "@/dataActions/site-equipment/FetchSiteDetail";

function Navbar() {

  const pathname = usePathname();
  const slug = pathname.split("/")[2];
  const {
    isLoading: isLoadingBranch,
    data: site,
    refetch: refetchBranch,
  } = useFetchSiteDetail(slug);
  console.log(site)

  const SidebarComponent = (
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col pt-8 rounded-lg">
        <div>
          <div className="flex flex-col mb-5">
            <span className="text-xl font-semibold">{site?.name}</span>
            <span className="text-[#707070] text-sm">
              {site?.address} Site
            </span>
          </div>
        </div>
        <ul className="mt-5 flex flex-col gap-8">
          <li className="rounded">
            <Link href={`/sites/${slug}`} className="flex items-center gap-1">
              <LayoutDashboard />
              Dashboard
            </Link>
          </li>

          {site?.name !== null ? (
            <li className="rounded">
              <Link
                href={`/sites/${slug}/employees`}
                className="flex items-center gap-1"
              >
                <Users />
                Employees
              </Link>
            </li>
          ) : null}
          {site?.name !== null ? (
            <li className="rounded">
              <Link
                href={`/sites/${slug}/shell`}
                className="flex items-center gap-1"
              >
                <Package />
                Orders
              </Link>
            </li>
          ) : null}

          {site?.name !== null ? (
            <li className="rounded">
              <Link
                href={`/sites/${slug}/settings`}
                className="flex items-center gap-1"
              >
                <Settings />
                Settings
              </Link>
            </li>
          ) : null}
        </ul>
      </div>
      <Link href="/contractor/dashboard" className="mb-5">
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
