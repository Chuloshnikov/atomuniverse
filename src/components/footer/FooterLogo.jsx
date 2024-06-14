import Image from "next/image";
import { greylogo } from "@/assets/svg";
import Link from "next/link";

const FooterLogo = () => {
  return (
    <div className='h-[500px]'>
        <Link href={'/'} className="flex items-center">
        <div className=" w-[55px] h-[55px] mdl:w-[40px] mdl:h-[45px]">
            <Image src={greylogo} width={100} height={100} alt="logo"/>
        </div>
        <h1 className="xs:text-3xl mdl:text-5xl text-mainText font-bold w-[150px] mdl:w-full">ATOM UNIVERCE</h1>
        </Link>
    </div>
  )
}

export default FooterLogo;