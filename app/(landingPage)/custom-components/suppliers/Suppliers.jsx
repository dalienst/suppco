import Materials from '../../../../assets/materials.jpeg'
import Image from 'next/image'
import { CircleCheckBig } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Suppliers() {
  return (
    <div id="suppliers" className='scroll-my-[80px] flex flex-col-reverse md:flex-row items-center gap-5 bg-sky-50 py-8 lg:py-0'>
        <div className='flex-1 py-3 lg:py-20'>
            <div className='px-4 lg:px-10 space-y-3'>
            <h1 className='text-lg lg:text-xl font-bold text-blue900'>SUPPLIERS</h1>
            <h2 className='text-lg lg:text-2xl font-bold'>Maximize your sales. Showcase your products to a global audience.</h2>
            <ul className="list-inside text-[#5f5e5e] tracking-wide leading-relaxed lg:leading-loose">
                <li className='flex gap-2 items-baseline'> 
                <CircleCheckBig size={16} className='text-blue900'/> 
                Effortlessly manage and track your materials and equipment.
                </li>
                <li className='flex gap-2 items-baseline'>
                <CircleCheckBig size={16} className='text-blue900'/> 
                Efficiently handle and monitor orders from start to finish.
                </li>
                <li className='flex gap-2 items-baseline'>
                <CircleCheckBig size={16} className='text-blue900'/> 
                Seamlessly oversee and manage multiple branches.
                </li>
                <li className='flex gap-2 items-baseline'>
                <CircleCheckBig size={16} className='text-blue900'/> 
                Manage all your employees in one place
                </li>
                <li className='flex gap-2 items-baseline'>
                <CircleCheckBig size={16} className='text-blue900'/> 
                Gain valuable insights with our customized dashboards.
                </li>
             
            </ul>
            <Link href='/auth/signup/supplier'>

            <Button className='bg-blue900 hover:bg-blue700'>Join now</Button>
            </Link>
            </div>
        </div>
        <div className='flex-1 h-full mt-3 lg:mt-0 px-2 lg:px-0 lg:pr-10'>
            <Image src={Materials} alt='construction materials' className='h-full rounded-lg object-cover'/>
        </div>
    </div>
  )
}

export default Suppliers