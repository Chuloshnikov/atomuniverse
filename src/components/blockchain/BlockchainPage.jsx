import { shortenString } from '@/libs/shorterString';
import React from 'react';

const BlockchainPage = ({ items }) => {
  return (
    <div className='my-2 flex flex-col w-full mdl:flex-row gap-2 border border-#A7A5AD p-2 rounded-md justify-between items-center'>
        <div className='flex gap-1'>
          from: {shortenString(items.sender)}
        </div> 
        <div>
          to: {shortenString(items.recipient)}
        </div>
        <div>
          {items.currency === "ac" ? "Atomic coin" : "Atomic Token"}
        </div>
        <div>
          amount: {items.founds.$numberDecimal}
        </div>
        
    </div>
  )
}

export default BlockchainPage;