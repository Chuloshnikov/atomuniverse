import { FaGear } from "react-icons/fa6";
import { BsGearFill } from "react-icons/bs";
import { BsGearWideConnected } from "react-icons/bs";

const InfoSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
        <div className="mt-12 flex gap-2 flex-col xl:flex-row">
          <div className="w-full xl:w-[50%] text-center justify-center items-center">
              <p className="text-2xl py-4 px-6 leading-7 max-w-[600px] mx-auto xl:mt-8">
                Discover a new world of possibilities with Atom Universe, 
                the next-generation advanced blockchain. 
                Our mission is to create a limitless, open and decentralized 
                universe where everyone can freely create, share and interact.
                </p>
          </div>
          <div className="w-full xl:max-w-[50%] p-8 flex items-center justify-center">
              <FaGear className="rotatingGear1 w-[200px] h-[200px] xl:w-[300px] xl:h-[300px text-smouthText"/>
              <BsGearFill className="rotatingGear2 w-[200px] h-[200px] text-accentBg "/>
              <BsGearWideConnected className="rotatingGear3 w-[200px] h-[200px] text-mainText"/>
          </div>
        </div>
    </div>
  )
}

export default InfoSection