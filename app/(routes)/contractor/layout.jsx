import ContractorNavbar from "@/components/contractor/Navbar";

function ContractorLayout({ children }) {
  return (
    <div className="bg-[#f8fbff]">
      <h1 className="font-bold pt-3 px-4">SUPPCO</h1>
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
