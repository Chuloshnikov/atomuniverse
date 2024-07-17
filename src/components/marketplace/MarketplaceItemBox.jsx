"use client"
import React from 'react'
import { FaWindowClose } from 'react-icons/fa';

const MarketplaceItemBox = ({itemInfo, toggle}) => {
  return (
    <div  className='z-10 fixed inset-0 bg-black/80 flex flex-col text-white'>
      <div className='flex justify-end items-end p-4'>
      <button onClick={toggle}>
          <FaWindowClose className=" h-7 w-7 text-accentBg hover:text-smouthText duration-200"/>
      </button>
      </div>
      <div>
        {itemInfo.name}
      </div>
    </div>
  )
}

export default MarketplaceItemBox;