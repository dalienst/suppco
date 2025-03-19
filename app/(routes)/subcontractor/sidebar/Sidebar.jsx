"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/app/components/ui/button";
import { LayoutDashboard, LogOut, Menu, Package, Settings } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
function Sidebar() {
  const pathname = usePathname();
  const SidebarComponent = (
    <div className="flex flex-col h-full py-2 md:py-0 justify-between">
      <div>
        <div className="flex gap-1 mb-3">
          <Image src='/logo.png' alt='logo' width={50} height={45} />
          <h2 className="font-bold text-2xl">SUPPCO</h2>
        </div>
        <hr />
        <ul className="mt-4">
          <li className="nav-item supplier-sidebar rounded">
            <Link
              href="/subcontractor"
              className={`flex items-center gap-1 mb-4 px-2 rounded-md py-2 ${pathname === '/subcontractor' ? 'bg-blue800 text-white hover:bg-blue700' : ''}`}
            >
              <LayoutDashboard size={20} />
              Dashboard
            </Link>
          </li>
          <li className="nav-item supplier-sidebar rounded">
            <Link
              href="/subcontractor/orders"
              className={`flex items-center gap-1 mb-4 px-2 rounded-md py-2 ${pathname.includes('orders') ? 'bg-blue800 text-white hover:bg-blue700' : ''}`}
            >
              <Package size={20} />
              Orders
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link href="/subcontractor/settings" className={`flex items-center gap-1 mb-4 px-2 rounded-md py-2 ${pathname.includes('settings') ? 'bg-blue800 text-white hover:bg-blue700' : ''}`}>
          <Settings size={20} />
          Settings
        </Link>
        <button
          onClick={() => signOut()}
          className="flex items-center gap-1 bg-transparent border-none"
        >
          <LogOut size={20} color="#000000" />
          Log Out
        </button>
      </div>
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
          <SheetContent side="left" className="p-0 pl-4 pr-10 w-[250px] h-full">
            {SidebarComponent}
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:block h-full">{SidebarComponent}</div>
    </nav>
  );
}

export default Sidebar;
