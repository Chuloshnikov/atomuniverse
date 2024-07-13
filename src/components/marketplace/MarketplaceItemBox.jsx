import React from 'react'

const MarketplaceItemBox = ({itemInfo}) => {
  return (
    <div  className='z-10 fixed inset-0 bg-black/80 flex items-center justify-center text-white'>{itemInfo.name}</div>
  )
}

export default MarketplaceItemBox;