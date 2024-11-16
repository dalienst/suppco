import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";
import Image from "next/image";

function ForgotPassword() {
  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <h1 className="font-bold text-xl p-4 md:p-6">SUPPCO</h1>
      <div className="flex justify-center items-center">
        <section className="flex flex-col items-center justify-center ">
          <Image src="/forgot.svg" alt="logo" width={200} height={200} />
          <h1 className="text-2xl mt-5 font-semibold">Forgot Password</h1>
          <p className="text-center">
          Please enter your email address. <br /> You will receive a link to
          create a new password via email.
        </p>
          <form className="flex mt-5 gap-2 items-center">
            <Input
            placeholder="Enter your email address"
            required
            type='email'
            />
            <button>
            <SendHorizontal className="text-jungle800"/>
            </button>
          </form>
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

export default ForgotPassword;