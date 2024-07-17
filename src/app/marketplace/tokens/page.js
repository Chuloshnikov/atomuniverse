"use client"
import MarketplaceItemBox from "@/components/marketplace/MarketplaceItemBox";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function TokensPage() {

  const [vouchers, setVouchers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() => {
    fetch('/api/items')
      .then(response => response.json())
      .then(data => {
        const filteredVouchers = data.filter(item => item.category === 'voucher');
        setVouchers(filteredVouchers);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const togglePopup = () => {
    setOpenPopup(!openPopup);
  }

  if (loading) {
    return(
      <div className='flex items-center justify-center'>
          <LoadingSpinner/>
      </div>
    );
}
  return (
    <div className='max-w-6xl mx-auto mt-12 p-4 pb-12'>
      <div className='mx-auto flex items-center justify-center rounded-md'>
        <div  className="bg-accentBg text-white py-2 px-4 text-center w-full border-2 border-accentBg rounded-l-md">
          tokens
        </div>
        <Link href={"/marketplace/nft"} className="bg-black text-white py-2 px-4 text-center w-full border-2 border-accentBg rounded-r-md">
            nft
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
          {vouchers.length > 0 && vouchers.map(voucher => (
            <div onClick={() => setOpenPopup(true)} key={voucher._id} className="bg-black hover:bg-yellow-400 hover:text-black rounded-md flex justify-center items-center p-4 duration-300 w-full">
              <div className="flex flex-col gap-2 text-center">
                <Image src={voucher.image} width={300} height={200} priority={true} className="rounded-md" alt={voucher.name}/>
                <h3 className="font-semibold">{voucher.name}</h3>
              </div>
              {openPopup && <MarketplaceItemBox toggle={togglePopup} itemInfo={voucher}/>}
            </div>
          ))}
      </div>
    </div>
  )
}
