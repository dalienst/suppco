import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Verified() {
  return (
    <div className="h-[100vh] max-h-[100vh] flex flex-col justify-between">
    <h1 className="font-bold text-xl p-4 md:p-6">SUPPCO</h1>
    <div className="flex justify-center items-center">
      <section className="flex flex-col items-center justify-center ">
        <Image src="/verified.svg" alt="logo" width={200} height={200} />
        <h1 className="text-2xl mt-5 font-semibold">Account Verified Successfully</h1>
        <p className="my-3 text-lg text-center">
          Your account has been verified successfully. You can now login.
        </p>
        <Link href="/auth/login">
        <Button className="bg-blue900 hover:bg-blue700">
          Proceed to Login -&gt;
        </Button>
        </Link>
      </section>
    </div>
    <div className="flex w-full md:my-5 md:w-[90vw] mx-auto md:rounded-lg flex-col space-y-1 md:space-y-0 md:flex-row md:items-center py-6 px-4 md:px-10 bg-blue900 text-white justify-between">
      <h1>SUPPCO</h1>
      <p>© 2024 Supcco. All Rights Reserved.</p>
      <p>Terms Privacy Policy</p>
    </div>
  </div>
  );
}

export default Verified;