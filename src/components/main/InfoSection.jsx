import { FaGear } from "react-icons/fa6";
import { BsGearFill } from "react-icons/bs";
import { BsGearWideConnected } from "react-icons/bs";
import TypewriterEffect from "./TypeWriterEffect";


const InfoSection = () => {
  const text = "Discover a new world of possibilities with Atom Universe, the next-generation advanced blockchain. Our mission is to create a limitless, open and decentralized universe where everyone can freely create, share and interact."
  return (
    <div className="max-w-6xl mx-auto">
        <div className="mt-12 flex gap-2 flex-col xl:flex-row">
          <div className="w-full xl:w-[50%] flex text-center justify-center items-center min-h-[300px] px-4">
            <TypewriterEffect text={text}/>
          </div>
          <div className="w-full xl:max-w-[50%] p-8 flex items-center justify-center mx-auto">
              <FaGear className="rotatingGear1 w-20 h-20 md:w-40 md:h-40 xl:w-[300px] xl:h-[300px] text-smouthText"/>
              <BsGearFill className="rotatingGear2 w-20 h-20 md:w-40 md:h-40 xl:w-[200px] xl:h-[200px] text-accentBg"/>
              <BsGearWideConnected className="rotatingGear3 w-20 h-20 md:w-40 md:h-40 xl:w-[200px] xl:h-[200px] text-mainText"/>
          </div>
        </div>
    </div>
  )
}

export default InfoSection;