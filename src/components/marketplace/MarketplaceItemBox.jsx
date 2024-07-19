"use client"
import Image from 'next/image';
import React from 'react'
import { FaWindowClose } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MarketplaceItemBox = ({itemInfo, toggle}) => {

  function buyItem() {
    return console.log("done")
  }
  return (
    <AnimatePresence>
      <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            >
    
    <div className='z-10 fixed inset-0 bg-black/80 flex flex-col text-white'>
      <div className='flex justify-end items-end p-4'>
      <button onClick={toggle}>
          <FaWindowClose className="h-7 w-7 text-accentBg hover:text-smouthText duration-200"/>
      </button>
      </div>
      <div className='flex items-center justify-center px-2'>
        <div className='bg-black rounded-md overflow-hidden text-center'>
          <Image src={itemInfo.image} width={500} height={250} alt={'itemimage'}/>
          <h3 className='text-2xl text-smouthText font-semibold m-2'>{itemInfo.name}</h3>
          <p className='text-lg text-smouthText font-semibold m-2'>{itemInfo.category.toUpperCase()}</p>
          <p className='text-lg text-smouthText font-semibold m-2'>price: <span>{itemInfo.category === "nft" ? (`${itemInfo.price} tokens`) : (`${itemInfo.price} $`)}</span></p>
          <p className='text-sm text-smouthText font-semibold m-1'>contract: <span>{itemInfo.contract}</span></p>
          <button 
          onClick={buyItem}
          className="shadow-button bg-accentBg hover:bg-smouthText 
          px-4 py-2 text-white rounded-md w-[200px] mt-2 mb-4
          font-semibold">
              BUY
          </button>
        </div>
      </div>
    </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default MarketplaceItemBox;