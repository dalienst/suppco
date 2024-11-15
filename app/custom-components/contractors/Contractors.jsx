import Site from '../../../assets/site.jpg'
import Image from 'next/image'
import { CircleCheckBig } from 'lucide-react'
import { Button } from '@/components/ui/button'

function Contractors() {
  return (
    <div className='flex flex-col md:flex-row items-center gap-5 bg-green-50 py-8 lg:py-0'>
        <div className='flex-1 h-full px-2 mt-5 lg:mt-0 lg:px-0 lg:pl-10'>
            <Image src={Site} alt='construction materials' className='h-full rounded-lg object-cover'/>
        </div>
        <div className='flex-1 py-3 lg:py-20'>
            <div className='px-4 lg:px-10 space-y-3'>
            <h1 className='text-lg lg:text-xl font-bold text-jungle800'>CONTRACTORS</h1>
            <h2 className='text-lg lg:text-2xl font-bold'>Tired of the hassle of finding reliable suppliers?</h2>
            <ul className="list-inside text-[#5f5e5e] tracking-wide leading-relaxed lg:leading-loose">
                <li className='flex gap-2 items-baseline'> 
                <CircleCheckBig size={16} className='text-jungle800'/> 
                Easily place orders for materials and equipment.
                </li>
                <li className='flex gap-2 items-baseline'>
                <CircleCheckBig size={16} className='text-jungle800'/> 
                Oversee multiple construction sites with ease.
                </li>
                <li className='flex gap-2 items-baseline'>
                <CircleCheckBig size={16} className='text-jungle800'/> 
                Manage subcontractors and employees efficiently.
                </li>
                <li className='flex gap-2 items-baseline'>
                <CircleCheckBig size={16} className='text-jungle800'/> 
                Monitor deliveries and ensure timely arrival.
                </li>
                <li className='flex gap-2 items-baseline'>
                <CircleCheckBig size={16} className='text-jungle800'/> 
                Keep track of materials and equipment at each site.
                </li>
                <li className='flex gap-2 items-baseline'>
                <CircleCheckBig size={16} className='text-jungle800'/> 
                Gain valuable insights with our customized dashboards.
                </li>
            </ul>
            <Button className='bg-jungle800 hover:bg-jungle700'>Join now</Button>
            </div>
        </div>
    </div>
  )
}

export default Contractors