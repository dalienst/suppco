import Image from "next/image";
import HeroImage from "../../../../assets/hero-bg.jpg";
import { Button } from "@/app/components/ui/button";
import ContractorImage from "../../../../assets/contractor.jpg";
import SupplierImage from "../../../../assets/supplier.jpg";
import Link from "next/link";

function Hero() {
  return (
    <div className="lg:h-[calc(100vh-80px)]">
      <div className="relative h-[60vh] lg:h-4/5 ">
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
        <Image
          src={HeroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-1/2 lg:w-1/2 lg:left-1/2 lg:-translate-x-1/2 translate-y-1/2 text-white">
          <h1 className="text-2xl lg:text-4xl font-bold text-center">
            Bridging the gap between contractors and suppliers
          </h1>
          <p className="text-center text-base px-1 lg:text-lg mt-5">
            Find and compare suppliers and contractors with ease using our web.
            Purchase construction equipment with ease. Create chainlinked orders
            and deliveries from your favourite suppliers.
          </p>
          <div className="flex justify-center mt-10">
            <Link href='/auth/signup/'>
              <Button className="bg-blue900 hover:bg-blue700 rounded-full">
                GET STARTED
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:h-[160px] px-4 lg:px-0 my-8 lg:my-0 w-full lg:absolute bottom-0">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 h-full justify-center md:w-4/5 mx-auto">
          <div className="bg-white relative shadow-md rounded-lg flex-1 flex items-center gap-4 px-4 py-6">
            <Image
              src={SupplierImage}
              alt="contractor"
              width={100}
              height={80}
              className="hidden lg:block object-cover"
            />
            <div className="text-black">
              <h1 className="text-blue900 font-bold text-xl">
                Are you a supplier?
              </h1>
              <p>
                Discover, compare, and connect with contractors in the industry.
              </p>
              <Link href='/auth/signup/supplier'>
              <Button className="bg-blue900 mt-4 hover:bg-blue700">
                Get started
              </Button>
              </Link>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg flex-1 flex items-center gap-4 px-4 py-6">
            <Image
              src={ContractorImage}
              alt="contractor"
              width={100}
              height={80}
              className="hidden lg:block object-cover"
            />
            <div className="text-black">
              <h1 className="text-jungle800 text-xl font-bold">
                Are you a contractor?
              </h1>
              <p>
                Easily purchase construction equipment, create seamless orders,
                and track deliveries.
              </p>
              <Link href='/auth/signup/contractor'>
              
              <Button className="bg-jungle800 mt-4 hover:bg-jungle600">
                Register now
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
