import Image from "next/image";
import { blockchainweb } from "@/assets/images";


const MoreAboutBlockchainSection = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-5 text-center mt-12">
        <div className="flex flex-col gap-4 px-4">
            <h2 className="font-bold text-4xl mx-auto">More about Blockchain and Token</h2>
            <div className="mx-auto flex justify-center">
                <Image src={blockchainweb} className="rounded-xl" width={1000} height={500} alt="blockchainweb"/>
            </div>
            <p className="text-lg font-semibold">
                Certainly! Let’s delve deeper into the Atom Universe and the Atomic Token.
            </p>
            <p className="text-lg">
                Atom Universe Blockchain: A Closer Look Atom Universe Blockchain is not just a platform; 
                it’s a revolution in the way we perceive and utilize blockchain technology. 
                Our blockchain is built for scale, speed, and efficiency. 
                It supports smart contracts, enabling developers to create decentralized applications (dApps) that can transform various industries. 
                With a focus on interoperability, Atom Universe Blockchain connects with other blockchains, 
                allowing for a seamless flow of information and assets.
            </p>
            <p className="text-lg">
                Security is paramount in Atom Universe. Our consensus mechanism ensures that all network participants have a
                voice in maintaining the integrity of the blockchain. This democratic approach to security fosters a robust
                and resilient network that stands strong against potential threats.
            </p>
            <p className="text-lg">
                Atomic Token: Powering the Ecosystem The Atomic Token goes beyond mere transactions; 
                it’s an enabler of innovation within Atom Universe. ATOMIC is designed to be more than a currency; 
                it’s a tool for empowerment. Developers use ATOMIC to deploy smart contracts, users spend ATOMIC 
                to access premium features, and validators receive ATOMIC as a reward for their contribution to network security.
            </p>
            <p className="text-lg">
                Holding ATOMIC tokens means you’re part of an ecosystem that values progress, community, and decentralization. 
                As Atom Universe grows, so does the potential of your ATOMIC tokens. They’re not just an investment; they’re a 
                passport to a future where blockchain technology is integrated into every aspect of our digital lives.
            </p>
            <p className="text-lg">
                Explore Atom Universe further and see how you can leverage the power of ATOMIC 
                tokens to unlock new opportunities in this ever-evolving blockchain landscape.
            </p>
        </div>
    </div>
  )
}

export default MoreAboutBlockchainSection;