import { FaGear } from "react-icons/fa6";

const LoadingSpinner = () => {
  return (
    <div className="mx-auto pt-[10%] pb-[10%]">
        <FaGear className="rotatingGear2 w-20 h-20 md:w-40 md:h-40 xl:w-[400px] xl:h-[400px] text-smouthText"/>
    </div>
  )
}

export default LoadingSpinner;