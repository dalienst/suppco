import Image from 'next/image'
import Hand from '../../../../assets/hand.jpg'
import Site from '../../../../assets/site.jpg'
import Materials from '../../../../assets/materials.jpeg'
import { CircleCheckBig } from 'lucide-react'

function About() {
  return (
    <div id='about' className="scroll-my-[140px] my-8 lg:my-16 flex flex-col md:flex-row items-center gap-4 lg:w-3/4 lg:mx-auto">
        <div className="grid gap-1 max-w-[400px] max-h-[400px] grid-cols-[minmax(100px_200px)_minmax(100px_200px)] grid-rows-[minmax(100px_200px)_minmax(100px_200px)] ">
            <div className=" row-span-2 col-start-1 col-end-2 bg-slate-200 ">
                <Image src={Hand} alt='shaking hands' className='h-full object-cover'/>
            </div>
            <div className=" col-start-2 col-end-3 bg-slate-500">
            <Image src={Site} alt='construction site' className='h-full object-cover'/>
            </div>
            <div className="col-start-2 col-end-3 bg-slate-700">
            <Image src={Materials} alt='Construction materials' className='h-full object-cover'/>
            </div>
        </div>
        <div className="space-y-3 px-4 text-[#5f5e5e] lg:px-0">
            <h1 className="font-bold text-jungle800 uppercase text-sm">About us</h1>
            <p className="text-xl lg:text-3xl font-bold text-black">Your partner in building success.</p>
            <p className="">At Suppco, we&apos;re committed to revolutionizing the construction industry. Our platform is designed to simplify the process of finding and working with reliable suppliers and contractors.</p>
            <p>With just a few clicks you can:</p>
            <ul className="list-inside text-[15px] lg:text-sm tracking-wide leading-relaxed lg:leading-loose">
                <li className='flex gap-2 items-baseline'> 
                <CircleCheckBig size={16} className='text-jungle800'/> 
                Discover top suppliers and contractors in your area.
                </li>
                <li className='flex gap-2 items-baseline'>
                <CircleCheckBig size={16} className='text-jungle800'/> 
                    Connect directly with suppliers to purchase equipment and materials.</li>
                <li className='flex gap-2 items-baseline'>
                <CircleCheckBig size={16} className='text-jungle800'/> 
                    Create seamless chainlinked orders and deliveries.</li>
            </ul>
        </div>
    </div>
  )
}

export default About