import Image from "next/image";
import {logo} from "../../assets/svg/index"
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={'/'} className="flex items-center">
        <div className=" w-[55px] h-[55px] mdl:w-[40px] mdl:h-[45px]">
            <Image src={logo} width={100} height={100} alt="logo"/>
        </div>
        <h1 className="xs:text-3xl mdl:text-5xl text-accentBg font-bold w-[150px] mdl:w-full">ATOM UNIVERCE</h1>
    </Link>
  )
}

export default Logo;