'use client'

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links=[
  {name:'Home', href:'#'},
  {name:'About Us', href:'#about'},
  {name:'Suppliers', href:'#suppliers'},
  {name:'Contractors', href:'#contractors'},
]
function NavBar() {
  const [openMenu, setOpenMenu] = useState(true);

return (
  <nav className="bg-white place-content-center md:flex md:items-center md:justify-between w-full h-[80px] z-50 fixed top-0 left-0 shadow-md">
    <div className=" flex justify-between items-center px-4 md:px-[2rem]">
      <Link href='#' className="font-bold">SUPPCO</Link>
      <span  onClick={()=>setOpenMenu(prev=>!prev)}>
          {openMenu ? 
          <Menu className="block cursor-pointer md:hidden h-6 w-6"/>
          : 
          <X className="block cursor-pointer md:hidden h-6 w-6"/>
          }
      </span>
    </div>
    <ul className={`${!openMenu ? 'top-[62px] opacity-100' :'top-[-400px]'} md:flex md:items-center md:gap-6 z-[-1] md:z-auto md:static absolute bg-white w-full
    md:w-auto md:opacity-100 opacity-0 transition-all ease-in duration-500`}>
      {links.map((link)=>(
          <li key={link.name} onClick={()=>setOpenMenu(true)} className="my-6 ml-6 md:my-0">
            <a href={link.href}>{link.name}</a>
          </li>
      ))}
    </ul>
    <Link href='/auth/login'>
    <Button className="hidden mr-[2rem] bg-blue900 md:block rounded-full hover:bg-blue700">
      Sign in
    </Button>
    </Link>
  </nav>
);
}

export default NavBar;