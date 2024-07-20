"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import LoadingSpinner from '../ui/LoadingSpinner';
import NftView from './NftView';


const MyNftPage = () => {
    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);
    const [selectedNft, setSelectedNft] = useState(null);

    useEffect(() => {
        const fetchNfts = async () => {
          setLoading(true);
          try {
            const response = await fetch('/api/wallet');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setNfts(data.nft);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchNfts();
      }, []);

      const togglePopup = () => {
        setOpenPopup(!openPopup);
      }

      const handleNftClick = (nft) => {
        setSelectedNft(nft);
        setOpenPopup(true);
      }

      if (loading) {
        return(
            <div className='flex items-center justify-center'>
                <LoadingSpinner/>
            </div>
        );
    }
  return (
    <div className='max-w-6xl mx-auto p-4'>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
          {nfts.length > 0 && nfts.map(nft => (
            <div onClick={() => handleNftClick(nft)} key={nft._id} className="bg-black rounded-md flex justify-center items-center p-4 hover:bg-yellow-400 hover:text-black duration-300 w-full">
              <div className="flex flex-col gap-2 text-center">
                <Image src={nft.image} width={300} height={200} priority={true} className="rounded-md" alt={nft.name}/>
                <h3 className="font-semibold">{nft.name}</h3>
              </div>
            </div>
          ))}
          {openPopup && <NftView toggle={togglePopup} itemInfo={selectedNft}/>}
      </div>
    </div>
  )
}

export default MyNftPage;