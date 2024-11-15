"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getSession, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });
    const session = await getSession();

    setLoading(false);
    if (response?.error) {
      setLoading(false);
      toast?.error("Invalid email or password");
    } else {
      toast?.success("Login successful! Redirecting...");
      if (session?.user?.is_contractor === true) {
        router.push("/contractor/dashboard");
      }

      if (session?.user?.is_supplier === true) {
        router.push("/supplier/dashboard");
      }

      if (session?.user?.is_subcontractor === true) {
        router.push("/subcontractor/dashboard");
      }

      if (session?.user?.is_worker === true) {
        router.push("/workers/dashboard");
      }

      if (session?.user?.is_employee === true) {
        router.push("/employees/dashboard");
      }

      if (session?.user?.is_superuser === true) {
        router.push("/admin");
      }
    }
  };

  return (
    <div className="h-[100vh] flex flex-col justify-between lg:justify-around">
        <h1 className="font-bold text-xl p-4 md:p-6">SUPPCO</h1>
    <div className="flex justify-center items-center">
        <form className="w-[300px] md:w-[460px] border py-10 px-5 md:p-10 space-y-5 rounded-lg">
            <div>
        <h3 className="text-3xl font-semibold text-center">Sign in</h3>
                  <p className="text-center font-semibold">
                    Sign in to your account
                  </p>
            </div>
          <div>
            <Label htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              placeholder="Your email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <Label htmlFor="password" className="">
              Password
            </Label>
            <Input
              type="password"
              placeholder="Your password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="bg-blue900 hover:bg-blue700 w-full rounded-full"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <div className="" role="status">
                <span className="">Loading...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </Button>

          <p className="text-[#5f5e5e]">
            Don&apos;t have an account?{" "}
            <Link className="text-blue900" href="/auth/signup/contractor">Create One</Link>
          </p>
          <p className="text-[#5f5e5e]">Forgot Password? <Link className="text-blue900" href="/auth/password/forgot-password">Reset Here</Link> </p>
        </form>
    </div>
    <div className="flex w-full md:my-5 md:w-[90vw] mx-auto md:rounded-lg flex-col space-y-1 md:space-y-0 md:flex-row md:items-center py-6 px-4 md:px-10 bg-blue900 text-white justify-between">
        <h1>SUPPCO</h1>
        <p>© 2024 Supcco. All Rights Reserved.</p>
        <p>Terms Privacy Policy</p>
      </div>
    </div>
  );
}

export default Login;