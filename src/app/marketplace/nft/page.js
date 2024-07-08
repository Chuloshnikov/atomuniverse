"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NftPage() {

  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    fetch('/api/items')
      .then(response => response.json())
      .then(data => {
        const filteredNfts = data.filter(item => item.category === 'nft');
        setNfts(filteredNfts);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='max-w-2xl mx-auto mt-12 p-4 pb-12'>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
          {nfts && nfts.map(nft => (
            <div className="bg-black rounded-md flex justify-center items-center p-4">
              <div className="flex flex-col gap-2 text-center">
                <Image src={nft.image} width={200} height={100} className="rounded-md" alt={nft.name}/>
                <h3 className="font-semibold">{nft.name}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
