import { atomictoken } from "@/assets/images";
import { atomcoin } from "@/assets/svg";
import Image from "next/image";

const WalletAmount = ({wallet}) => {
  return (
    <div className="border-2 border-accentBg rounded-md">
      <div className="flex flex-col gap-2 p-2">
        <div className="flex gap-2 items-center">
          <span className="text-sm">
              AT
          </span>
          <div className="w-[16px] h-[16px]">
            <Image src={atomictoken} objectFit="fill" alt="token"/>
          </div>
            <span className="bg-black p-1 rounded-md w-full text-left">{wallet?.tokenAmount.$numberDecimal}</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-sm">
              AC
          </span>
        <div className="w-[15px] h-[15px]">
            <Image src={atomcoin} objectFit="fill" alt="coin"/>
        </div>
            <span className="bg-black p-1 rounded-md w-full text-left">{wallet?.coinAmount.$numberDecimal}</span>
        </div>
      </div>
    </div>
  )
}

export default WalletAmount;