import Image from "next/image";
import { blokchain } from "@/assets/images";
import TypewriterEffect from "../main/TypeWriterEffect";

const BlockchainPotentialSection = () => {

    const text = "Join us on this exciting journey as we explore the vast expanse of blockchain potential. Dive deeper into Atom Universe and discover how you can be part of this revolutionary movement."

  return (
    <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-5 items-center">
        <div className="w-full xl:max-w-[50%] rounded-xl p-4">
            <Image src={blokchain} className="rounded-xl" width={400} height={200} alt="blockchain"/>
        </div>
        <div className="flex flex-col gap-4 p-2 font-semibold leading-snug text-center lgl:text-left max-w-[1000px]">
            <p className="text-base lgl:text-2xl">
            <TypewriterEffect
                text={text}
                />
            </p>
        </div>
    </div>
  )
}

export default BlockchainPotentialSection;