import Link from "next/link";

export default function NftPage() {
  return (
    <div className='max-w-md mx-auto mt-12 p-4'>
      <div className='mx-auto flex items-center justify-center rounded-md'>
          <Link href={"/marketplace/tokens"} className="bg-black text-white py-2 px-4 text-center w-full border-2 border-accentBg rounded-l-md">
            tokens
          </Link>
          <div
          className="text-white py-2 px-4 text-center w-full border-2 border-accentBg bg-accentBg rounded-r-md"
          >
            nft
          </div>
      </div>
      
    </div>
  )
}
