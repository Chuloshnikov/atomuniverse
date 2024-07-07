import Link from 'next/link'

export default function TokensPage() {
  return (
    <div className='max-w-md mx-auto mt-12 p-4'>
      <div className='mx-auto flex items-center justify-center rounded-md'>
        <div  className="bg-accentBg text-white py-2 px-4 text-center w-full border-2 border-accentBg rounded-l-md">
          tokens
        </div>
        <Link href={"/marketplace/nft"} className="bg-black text-white py-2 px-4 text-center w-full border-2 border-accentBg rounded-r-md">
            nft
        </Link>
      </div>
    </div>
  )
}
