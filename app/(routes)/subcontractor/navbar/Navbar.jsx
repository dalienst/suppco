import Image from "next/image"
import { usePathname } from "next/navigation"

const navbarDescriptions = {
  'subcontractor': 'Have an overview of everything from the dashboard',
  'orders': 'Take a look at the orders you have made',
  'settings': 'Update your profile here',
}

function Navbar({subcontractor}) {
  const pathname = usePathname()
  const currentPath = pathname.split('/').pop()
  const description = navbarDescriptions[currentPath] 
  return (
    <nav>
      <div className="md:hidden absolute top-0 right-0 left-0 py-5 pl-4 bg-white flex border gap-1 mb-3">
                <Image src='/logo.png' alt='logo' width={50} height={45} />
                <h2 className="font-bold text-2xl">SUPPCO</h2>
              </div>
      <div className="flex pt-24 md:pt-4 justify-between items-center gap-5">
          <div>
            <p className="text-xl font-semibold">Hello {subcontractor?.user?.first_name}</p>
            <p className="text-sm text-[#797979]">{description}</p>
          </div>
          <div>
          <div className="rounded-full overflow-hidden h-[32px] w-[32px]">
          <Image
                src={subcontractor?.user?.avatar ? subcontractor?.user?.avatar : '/user.png'}
                alt="logo"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
          </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar