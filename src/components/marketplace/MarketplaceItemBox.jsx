"use client"
import Image from 'next/image';
import React from 'react'
import { FaWindowClose } from 'react-icons/fa';

const MarketplaceItemBox = ({itemInfo, toggle}) => {

  console.log(itemInfo)
  return (
    <div className='z-10 fixed inset-0 bg-black/80 flex flex-col text-white'>
      <div className='flex justify-end items-end p-4'>
      <button onClick={toggle}>
          <FaWindowClose className="h-7 w-7 text-accentBg hover:text-smouthText duration-200"/>
      </button>
      </div>
      <div className='flex items-center justify-center px-2'>
        <div className='bg-black rounded-md overflow-hidden text-center'>
          <Image src={itemInfo.image} width={500} height={250} alt={'itemimage'}/>
          <h3 className='text-2xl text-smouthText font-semibold m-4'>{itemInfo.name}</h3>
          <p className='text-lg text-smouthText font-semibold m-4'>price: <span>{itemInfo.price} tokens</span></p>
        </div>
      </div>
    </div>
  )
}

export default MarketplaceItemBox;