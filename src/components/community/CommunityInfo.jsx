import Image from "next/image";
import { communityimage } from "@/assets/images";
import { cryptocommunity } from "@/assets/images";

const CommunityInfo = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-5 text-center">
      <div className="flex items-center flex-col xl:flex-row">
        <div className="p-4 xl:hidden">
          <Image src={cryptocommunity} className="rounded-lg" alt="cryptocommunity"/>
        </div>
        <div className="p-6 hidden xl:block">
          <Image src={communityimage} className="rounded-lg pulse" alt="community"/>
        </div>
        <div className="p-6 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">
            The Community of Atom Universe: Our Core Strength
          </h2>
          <p className="text-lg">
            Atom Universe is not just defined by its technology but also by its vibrant and active community. 
            Our community is the driving force behind the success and continuous innovation within the ecosystem. 
            It’s a diverse group of individuals, developers, enthusiasts, and supporters who share a common vision 
            of a decentralized future empowered by blockchain technology.
          </p>
          <p className="text-lg">
            Engagement and Governance Community members are not just passive observers; 
            they are active participants in the governance of Atom Universe. Through the use of ATOMIC tokens, 
            members can vote on proposals, influence decision-making, and contribute to the direction of the project. 
            This level of engagement ensures that Atom Universe remains aligned with the needs and desires of those it serves.
          </p>
          <p className="text-lg">
            Collaboration and Support The Atom Universe community is a hub for collaboration, where ideas are exchanged, 
            partnerships are formed, and support is readily available. Whether you’re a developer looking for feedback on your 
            latest dApp or a user seeking assistance, the community is there to help. We foster an environment where everyone 
            can contribute and benefit from collective wisdom.
          </p>
        </div>
      </div>
     
    
    </div>
  )
}

export default CommunityInfo;
