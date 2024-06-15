import Image from "next/image";
import { explosion } from "@/assets/images";

const WelcomeSection = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-5">
      <div className="w-full xl:max-w-[50%] rounded-xl p-4">
        <Image src={explosion} className="rounded-xl" width={1000} height={500} alt="explosion"/>
      </div>
      <div className="flex flex-col gap-4 p-4 text-center lgl:text-left max-w-[500px]">
        <h2 className="text-lg lgl:text-2xl font-semibold">
          Welcome to Atom Universe, where innovation meets the infinite possibilities of blockchain technology.
        </h2>
        <p className="text-base lgl:text-lg">
          Atom Universe Blockchain At the heart of Atom Universe lies our cutting-edge blockchain technology, 
          designed to power a new era of digital interactions. Our blockchain is a decentralized ledger that 
          records all transactions across a network of computers. This ensures that each transaction is secure, 
          transparent, and tamper-proof. With Atom Universe Blockchain, we’re building a foundation for trustless 
          agreements and exchanges, enabling users to transact without the need for traditional intermediaries.
        </p>
      </div>
    </div>
  )
}

export default WelcomeSection;