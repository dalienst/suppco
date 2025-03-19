import ContractorNavbar from "@/components/contractor/Navbar";
import Image from "next/image";

function ContractorLayout({ children }) {
  return (
    <div className="bg-[#f8fbff]">
      <div className="flex gap-1 pl-3 pt-4">
        <Image src="/logo.png" alt="logo" width={50} height={45} />
        <h2 className="font-bold text-2xl">SUPPCO</h2>
      </div>
      <div className="flex relative">
        <div className="absolute -top-[65px] md:-top-[30px] right-[40px] md:relative md:left-0 md:flex-1">
          <ContractorNavbar />
        </div>
        <div className="flex-[5] max-h-[calc(100vh-55px)] overflow-auto border mt-3 md:rounded-tl-xl bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContractorLayout;
