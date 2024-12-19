import Navbar from "./navbar/Navbar"

function SiteLayout({ children }) {
  return (
    <div className="bg-[#f8fbff] h-screen overflow-hidden">
      <h1 className="font-bold text-2xl pt-3 px-4">SUPPCO</h1>
      <div className="flex relative">
        <div className="absolute -top-[65px] md:-top-[30px] right-[40px] md:relative md:left-0 md:flex-1">
          <Navbar />
        </div>
        <div className="flex-[5] h-[calc(100vh-70px)] overflow-auto px-2 md:px-4 border mt-4 md:rounded-tl-xl bg-white">
          {children}
        </div>
      </div>
    </div>
  )
}

export default SiteLayout