'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

function UserRole() {
    const [role, setRole] = useState('')
  return (
    <div className="h-[100vh] flex flex-col justify-between">
        <h1 className="font-bold text-xl p-6">SUPPCO</h1>
    <div className="flex flex-col gap-10 items-center">
        <h1 className="text-4xl">Join as a supplier or contractor</h1>
        <div className="flex gap-5">
            <button onClick={()=>setRole('supplier')} className={`${role === 'supplier' ? 'bg-blue50 border-none' : 'border'} text-bold text-sm font-semibold grid py-8 px-16 rounded-lg place-content-center hover:bg-blue50`}> SUPPLIER </button>
            <button onClick={()=>setRole('contractor')} className={`${role === 'contractor' ? 'bg-jungle50 border-none' : 'border'} text-bold text-sm font-semibold grid py-8 px-16 rounded-lg place-content-center hover:bg-jugnle50`}> CONTRACTOR </button>
        </div>
        <Link href={`/auth/signup/${role}`}>
        <Button disabled={role === ''} className={`${role === '' ? 'cursor-not-allowed' :''} rounded-full bg-blue900 hover:bg-blue700`}>{`Create account ${role === 'supplier' ? 'as a supplier' : role === 'contractor' ? 'as a contractor' : ''}`}</Button>
        </Link>
        <p className="text-[#5f5e5e]">
            Don&apos;t have an account?{" "}
            <Link className="text-blue900" href="/auth/login">Log in</Link>
          </p>
    </div>
    <div className="flex mb-5 w-[90vw] mx-auto rounded-lg flex-col space-y-1 md:space-y-0 md:flex-row md:items-center py-6 px-4 md:px-10 bg-blue900 text-white justify-between">
      <h1>SUPPCO</h1>
      <p>© 2024 Supcco. All Rights Reserved.</p>
      <p>Terms Privacy Policy</p>
    </div>
    </div>
  )
}

export default UserRole