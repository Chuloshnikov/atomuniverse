import { RiRobot2Fill } from "react-icons/ri";

const NotFoundComponent = () => {
  return (
    <>
    <div className="mx-auto flex flex-col items-center">
        <div className="flex text-[120px] items-center font-bold mx-auto">
            <span>4</span>
            <RiRobot2Fill/>
            <span>4</span>
        </div>
       <p className="text-lg mx-auto">
            Not-Found
       </p>
    </div>
    
    </>
  )
}

export default NotFoundComponent