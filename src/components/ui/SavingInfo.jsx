import React from 'react'

const SavingInfo = ({text}) => {
  return (
    <div className='bg-black text-white absolute top-[10%] left-[20%] mdl:left-[45%] min-h-[100px] min-w-[200px] shadow-lg flex justify-center items-center rounded-lg'>
        <span className='text-xl font-semibold'>{text}</span>
    </div>
  )
}

export default SavingInfo;