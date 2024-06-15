import AtomicToken from "../ui/AtomicToken";

const TokenInfoSection = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col-reverse xl:flex-row gap-5 mt-6 xl:mt-12 items-center">
        <div className="flex flex-col gap-4 p-4 text-center lgl:text-left max-w-[700px]">
            <p className="text-base lgl:text-lg">
            Atomic Token The Atomic Token (ATOMIC) is the lifeblood of Atom Universe. 
            It’s a utility token that facilitates transactions within our ecosystem, 
            providing a seamless exchange of value. ATOMIC tokens are used to reward network participants, 
            pay for transaction fees, and access various services within Atom Universe. 
            As a holder of ATOMIC tokens, you’re not just investing in a digital asset; you’re 
            becoming part of a vibrant community committed to shaping the future of decentralized finance and beyond.
            </p>
        </div>
        <div className="w-full xl:max-w-[50%] rounded-xl">
            <AtomicToken width={300} height={300}/>
        </div>
    </div>
  )
}

export default TokenInfoSection;