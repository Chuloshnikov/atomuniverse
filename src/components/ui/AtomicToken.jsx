import Image from "next/image"
import { atomictoken } from "@/assets/images"

const AtomicToken = ({ width, height }) => {
  return (
    <>
    <Image className="mx-auto" src={atomictoken} width={width} height={height} alt="atomic"/>
    </>
  )
}

export default AtomicToken