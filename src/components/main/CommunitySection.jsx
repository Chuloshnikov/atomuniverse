import Image from "next/image";
import { controlroom } from "@/assets/images";

const CommunitySection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mt-12 flex gap-2 flex-col xl:flex-row items-center justify-center">
        <div className="p-6">
          <div className="max-w-[300px] max-h-[400px] rounded-xl overflow-hidden">
            <Image src={controlroom} width={600} height={1000} alt="controlroom"/>
          </div>
        </div>
      <div className="w-full xl:w-[50%] flex flex-col gap-4 text-center">
              <p className="text-xl px-6 leading-relaxed max-w-[600px] mx-auto xl:mt-6">
                Atom Universe offers the speed, scalability and security you expect from cutting-edge blockchain technology. 
                We believe in the power of community and the democratization of access to technology, 
                so our blockchain is designed so that everyone can experience its benefits.
              </p>
              <p className="text-xl px-6 leading-relaxed max-w-[600px] mx-auto">
                Join us on this exciting journey. Together, we can create a future that deserves the world's attention. Discover Atom Universe - your key to a new digital world!
              </p>
          </div>
      </div>
    </div>
  )
}

export default CommunitySection;