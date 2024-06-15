"use client"
import { useState } from 'react'

const FooterInput = () => {
  return (
    <div>
        <h5 className='text-4xl'>Let’s stay in touch.</h5>
          <form 
        className='border-2 mt-2 border-mainText border-2 rounded-3xl max-w-[377px] flex gap-2 items-center justify-between'
        >
            <input
            className='text-sm lg:text-base text-black py-2 px-5 rounded-3xl bg-black w-full text-mainText'
            placeholder='email'
            />
            <button
            className='py-3 px-5 border-2 border-mainText rounded-3xl text-xs lg:text-sm duration-300 font-semibold'
            >
              Submit
            </button>
        </form>
    </div>
  )
}

export default FooterInput