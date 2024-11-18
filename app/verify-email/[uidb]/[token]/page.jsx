"use client";

import { Button } from "@/app/components/ui/button";
import { verifyAccount } from "@/services/accounts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function VerifyAccount({ params: { uidb, token } }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleVerification = async () => {
    setLoading(true);
    try {
      await verifyAccount(uidb, token);
      toast.success("Account verified successfully");
      setLoading(false);
      router.push("/verified");
    } catch (error) {
      toast.error("Failed to verify account");
      setLoading(false);
    }
  };
  return (
    <div className="h-[100vh] max-h-[100vh] flex flex-col justify-between">
      <h1 className="font-bold text-xl p-4 md:p-6">SUPPCO</h1>
      <div className="flex justify-center items-center">
      <section className="flex flex-col space-y-3 items-center justify-center ">
          <Image src="/email.svg" alt="logo" width={200} height={200} />
          <div className="text-center">
          <h1>One last step</h1>
          <p>Click the button below to verify your account</p>
          </div>
          <Button
            disabled={loading}
            onClick={handleVerification}
            className="bg-blue900 hover:bg-blue700"
          >
            {loading ? (
                <span className="visually-hidden">Loading...</span>
            ) : (
              "Verify Account"
            )}
          </Button>
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

export default VerifyAccount;