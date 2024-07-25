"use client"
import { useState } from 'react'

const FooterInput = () => {

  const [email, setEmail] = useState('');

  async function getInTouch(e) {
    e.preventDefault();
    const response = await fetch('/api/get-in-touch', {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {'Content-Type': 'application/json'}
    })
    if (response.ok) {
      setEmail('');
  } else {
      setEmail('Error');
  }
  }
  return (
    <div>
        <h5 className='text-4xl'>Let’s stay in touch.</h5>
          <form 
        className='border-2 mt-2 border-mainText border-2 rounded-3xl max-w-[377px] flex gap-2 items-center justify-between'
        >
            <input
            onChange={e => setEmail(e.target.value)}
            className='text-sm lg:text-base py-2 px-5 rounded-3xl bg-black w-full text-mainText'
            placeholder='email'
            value={email}
            />
            <button
            type='submit'
            className='py-3 px-5 border-2 border-mainText rounded-3xl text-xs lg:text-sm duration-300 font-semibold'
            >
              Submit
            </button>
        </form>
    </div>
  )
}

export default FooterInput